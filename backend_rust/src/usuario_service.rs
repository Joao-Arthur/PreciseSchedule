use rocket::data;
use rocket::data::FromDataSimple;
use rocket::http::ContentType;
use rocket::http::Status;
use rocket::Data;
use rocket::Outcome;
use rocket::Outcome::*;
use rocket::Request;
use std::io::Read;

const LIMIT: u64 = 256;

pub struct Usuario {
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

pub fn login(usuario: Usuario) -> bool {
    return usuario.login == "admin" && usuario.senha == "123";
}

pub fn cadastra(usuario: Usuario) -> bool {
    return usuario.login == "admin";
}
