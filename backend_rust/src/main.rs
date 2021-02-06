#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde_derive;
#[macro_use]
extern crate diesel;

mod controller;
mod core;
mod routes;
mod usuario_service;

fn main() {
    controller::start_server();
}
