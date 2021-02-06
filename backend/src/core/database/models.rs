use super::schema::{event, user_profile};

#[derive(Queryable, Insertable)]
#[table_name = "user_profile"]
pub struct User<'a> {
    pub id: i32,
    pub name: &'a str,
    pub gender: &'a str,
    pub email: &'a str,
    pub username: &'a str,
    pub iterations: i32,
    pub salt: &'a str,
    pub hash: &'a str,
}

#[derive(Queryable, Insertable)]
#[table_name = "event"]
pub struct Event<'a> {
    id: i32,
    name: &'a str,
    description: &'a str,
    active: bool,
    user_id: i32,
    importance: i32,
    frequency: i32,
    category: i32,
}
