use crate::{
    domain::validation::{StrExactErr, Val},
    infra::validation::Field,
};

pub fn str_exact(valid: &String, f: &Field) -> Result<(), StrExactErr> {
    match &f.value {
        Val::Str(str_value) => {
            if str_value == valid {
                Ok(())
            } else {
                Err(StrExactErr(f.name))
            }
        }
        Val::None => {
            if f.has_required {
                Err(StrExactErr(f.name))
            } else {
                Ok(())
            }
        }
        _ => Err(StrExactErr(f.name)),
    }
}

#[cfg(test)]
mod test {
    use crate::infra::validation::validate::stub::f_obj_stub;

    use super::*;

    #[test]
    fn test_str_exact_ok() {
        assert_eq!(str_exact(&String::from("Ai"), &Field::of(Val::None)), Ok(()));
        assert_eq!(
            str_exact(&String::from("Ai"), &Field::of(Val::Str(String::from("Ai")))),
            Ok(())
        );
    }

    #[test]
    fn test_str_exact_err() {
        assert_eq!(
            str_exact(&String::from("TO BE"), &Field::of(Val::Str(String::from("to be")))),
            Err(StrExactErr("foo"))
        );
    }

    #[test]
    fn test_wrong_type_err() {
        assert_eq!(str_exact(&String::from(""), &f_obj_stub()), Err(StrExactErr("foo")));
    }

    #[test]
    fn test_none_not_required() {
        assert_eq!(str_exact(&String::from(""), &Field::default()), Ok(()));
    }

    #[test]
    fn test_none_required() {
        assert_eq!(str_exact(&String::from(""), &Field::required()), Err(StrExactErr("foo")));
    }
}
