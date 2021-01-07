use super::routes;

pub fn start_server() {
    rocket::ignite()
        .mount(
            "/",
            routes![
                routes::login,
                routes::options_login,
                routes::post,
                routes::options_post
            ],
        )
        .register(catchers![routes::not_found])
        .launch();
}
