use crate::domain::generator::{DateGen, IdGen};

#[derive(Debug, PartialEq)]
pub struct User {
    pub id: String,
    pub first_name: String,
    pub birthdate: String,
    pub email: String,
    pub username: String,
    pub created_at: String,
    pub password: String,
    pub updated_at: String,
}

pub struct UserCred {
    pub username: String,
    pub password: String,
}

pub trait UserRepo {
    fn c(User) -> Result<(), DBErr>;
    fn u(User) -> Result<(), DBErr>;
    fn rById()-> Result<(), DBErr>;
    fn rByCred(UserCred)-> Result<(), DBErr>;
    fn countUsernane(String)-> Result<i32, DBErr>;
    fn countEmail(String)    -> Result<i32, DBErr>;
};


#[cfg(test)]
mod user_create_test {
    use super::*;
    use crate::domain::generator::test::{DateGenStub, IdGenStub};

    #[test]
    fn test_user_from_create_model() {
        let user_create_model = UserCreateModel {
            email: "email".to_owned(),
            first_name: "first_name".to_owned(),
            birthdate: "birthdate".to_owned(),
            username: "username".to_owned(),
            password: "password".to_owned(),
        };
        let user = User {
            id: "user_id".to_owned(),
            email: "email".to_owned(),
            first_name: "first_name".to_owned(),
            birthdate: "birthdate".to_owned(),
            username: "username".to_owned(),
            password: "password".to_owned(),
            created_at: "2024-07-03T22:49:51.279Z".to_owned(),
            updated_at: "2024-07-03T22:49:51.279Z".to_owned(),
        };
        assert_eq!(
            user_from_create_model(
                user_create_model,
                "user_id".to_owned(),
                "2024-07-03T22:49:51.279Z".to_owned()
            ),
            user
        );
    }

    #[test]
    fn test_user_create() {
        let user_create_model = UserCreateModel {
            email: "email".to_owned(),
            first_name: "first_name".to_owned(),
            birthdate: "birthdate".to_owned(),
            username: "username".to_owned(),
            password: "password".to_owned(),
        };
        let user = User {
            id: "user_id".to_owned(),
            email: "email".to_owned(),
            first_name: "first_name".to_owned(),
            birthdate: "birthdate".to_owned(),
            username: "username".to_owned(),
            password: "password".to_owned(),
            created_at: "2024-07-03T22:49:51.279Z".to_owned(),
            updated_at: "2024-07-03T22:49:51.279Z".to_owned(),
        };
        assert_eq!(
            user_create(
                &IdGenStub("user_id".to_owned()),
                &DateGenStub("2024-07-03T22:49:51.279Z".to_owned()),
                user_create_model
            ),
            Ok(user)
        );
    }
}
