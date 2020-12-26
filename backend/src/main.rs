#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde_derive;
extern crate serde;
extern crate serde_json;

use rocket::data;
use rocket::data::FromDataSimple;
use rocket::http::ContentType;
use rocket::http::Status;
use rocket::response::content::Html;
use rocket::Data;
use rocket::Outcome;
use rocket::Outcome::*;
use rocket::Request;
use rocket::Response;
use rocket_contrib::json::Json;
use std::io::Read;

const LIMIT: u64 = 256;

#[derive(Debug, Serialize, Deserialize)]
struct Person {
    name: String,
    age: u8,
}

struct Usuario {
    login: String,
    senha: String,
}

impl FromDataSimple for Usuario {
    type Error = String;

    fn from_data(req: &Request, data: Data) -> data::Outcome<Self, String> {
        let person_ct = ContentType::new("application", "json");
        if req.content_type() != Some(&person_ct) {
            return Outcome::Forward(data);
        }

        let mut string = String::new();
        if let Err(e) = data.open().take(LIMIT).read_to_string(&mut string) {
            return Failure((Status::InternalServerError, format!("{:?}", e)));
        }

        let (login, senha) = match string.find(':') {
            Some(i) => (string[..i].to_string(), string[(i + 1)..].to_string()),
            None => return Failure((Status::UnprocessableEntity, "':'".into())),
        };

        Success(Usuario { login, senha })
    }
}

#[get("/<name>/<age>", format = "json")]
fn get_hello(name: String, age: u8) -> Json<Person> {
    let person = Person {
        name: name,
        age: age,
    };
    return Json(person);
}

#[post("/login", format = "json", data = "<usuario>")]
fn login(usuario: Usuario) -> Status {
    if usuario.login == "admin" && usuario.senha == "123" {
        Status::Ok
    } else {
        Status::Unauthorized
    }
}

#[options("/login")]
fn options_handler<'a>() -> Response<'a> {
    Response::build()
        .raw_header("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
        .raw_header("Access-Control-Allow-Methods", "OPTIONS, POST")
        .raw_header("Access-Control-Allow-Headers", "Content-Type")
        .finalize()
}

#[catch(404)]
fn not_found(request: &Request) -> Html<String> {
    let html = match request.format() {
        Some(ref mt) if !mt.is_json() && !mt.is_plain() => {
            format!("<p>'{}' requests are not supported.</p>", mt)
        }
        _ => format!(
            "<p>Sorry, '{}' is an invalid path! Try \
                 /hello/&lt;name&gt;/&lt;age&gt; instead.</p>",
            request.uri()
        ),
    };

    Html(html)
}

fn main() {
    rocket::ignite()
        .mount("/", routes![get_hello, login, options_handler])
        .register(catchers![not_found])
        .launch();
}
