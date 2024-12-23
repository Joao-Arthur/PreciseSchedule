use crate::{
    domain::validation::{StrErr, Val},
    infra::validation::Field,
};

pub fn str(f: &Field) -> Result<(), StrErr> {
    match &f.value {
        Val::Str(_value) => Ok(()),
        Val::None => {
            if f.has_required {
                Err(StrErr(f.name))
            } else {
                Ok(())
            }
        }
        _ => Err(StrErr(f.name)),
    }
}

#[cfg(test)]
mod test {
    use crate::infra::validation::validate::stub::{f_obj_stub, f_str_stub};

    use super::*;

    #[test]
    fn test_type_ok() {
        assert_eq!(str(&f_str_stub()), Ok(()));
    }

    #[test]
    fn test_wrong_type_err() {
        assert_eq!(str(&f_obj_stub()), Err(StrErr("foo")));
    }

    #[test]
    fn test_none_not_required() {
        assert_eq!(str(&Field::default()), Ok(()));
    }

    #[test]
    fn test_none_required() {
        assert_eq!(str(&Field::required()), Err(StrErr("foo")));
    }
}
