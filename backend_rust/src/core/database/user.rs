extern crate diesel;

use super::connection;
use super::models::User;
use super::schema::user_profile::dsl::user_profile;
use diesel::prelude::*;

//use std::env::args;
//fn delete() {
//    let target = args().nth(1).expect("Expected a target to match against");
//    let pattern = format!("%{}%", target);
//    let connection = connection::establish_connection();
//    let num_deleted = diesel::delete(user_profile.filter(user_profile.like(pattern)))
//        .execute(&connection)
//        .expect("Error deleting posts");
//    println!("Deleted {} posts", num_deleted);
//}

//fn update() {
//    let id = args()
//        .nth(1)
//        .expect("publish_post requires a post id")
//        .parse::<i32>()
//        .expect("Invalid ID");
//    let connection = connection::establish_connection();
//    let post = diesel::update(user_profile.find(id))
//        .set(published.eq(true))
//        .get_result::<User>(&connection)
//        .expect(&format!("Unable to find post {}", id));
//    println!("Published post {}", post.title);
//}

fn select() {
    let connection = connection::establish_connection();
    let results = user_profile
        .load::<User>(&connection)
        .expect("Error loading users");
    println!("Displaying {} users", results.len());
}

pub fn insert(user: User) {
    let connection = connection::establish_connection();
    let result: std::result::Result<User, diesel::result::Error> =
        diesel::insert_into(user_profile)
            .values(&user)
            .get_result::<User>(&connection);

    //       .expect("Error saving user")
}
