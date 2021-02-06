extern crate rocket;
extern crate serde;
extern crate serde_derive;
extern crate serde_json;

use super::usuario_service;
use rocket::http::Status;
use rocket::response::content::Html;
use rocket::Request;
use rocket::Response;

//enum Languages {
//    En,
//    Pt,
//    Es,
//    Dt,
//}

#[derive(Debug, Serialize, Deserialize)]
struct Person {
    name: String,
    age: u8,
}

//struct Configuracoes {
//    language: Languages,
//}

//#[get("/<name>/<age>", format = "json")]
//fn get_hello(name: String, age: u8) -> Json<Person> {
//    let person = Person {
//        name: name,
//        age: age,
//    };
//    return Json(person);
//}

//#[get("/configuracoes", format = "json")]
//fn get_hello(name: String, age: u8) -> Json<Person> {
//    let person = Person {
//        name: name,
//        age: age,
//    };
//    return Json(person);
//}

#[post("/login", format = "json", data = "<usuario>")]
pub fn login(usuario: usuario_service::Usuario) -> Status {
    if usuario_service::login(usuario) {
        Status::Ok
    } else {
        Status::Unauthorized
    }
}

#[options("/login")]
pub fn options_login<'a>() -> Response<'a> {
    Response::build()
        .raw_header("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
        .raw_header("Access-Control-Allow-Methods", "OPTIONS, POST")
        .raw_header("Access-Control-Allow-Headers", "Content-Type")
        .finalize()
}

#[post("/post", format = "json", data = "<usuario>")]
pub fn post(usuario: usuario_service::Usuario) -> Status {
    if usuario_service::cadastra(usuario) {
        Status::Ok
    } else {
        Status::InternalServerError
    }
}

#[options("/post")]
pub fn options_post<'a>() -> Response<'a> {
    Response::build()
        .raw_header("Access-Control-Allow-Origin", "http://127.0.0.1:3000")
        .raw_header("Access-Control-Allow-Methods", "OPTIONS, POST")
        .raw_header("Access-Control-Allow-Headers", "Content-Type")
        .finalize()
}

#[catch(404)]
pub fn not_found(request: &Request) -> Html<String> {
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
