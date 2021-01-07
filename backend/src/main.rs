#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

#[macro_use]
extern crate serde_derive;

mod controller;
mod routes;

fn main() {
    controller::start_server();
}
