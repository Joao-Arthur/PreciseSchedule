use crate::{
    domain::validation::{NumFMinErr, Val},
    infra::validation::Field,
};

pub fn num_f_min(valid: f64, f: &Field) -> Result<(), NumFMinErr> {
    match f.value {
        Val::Num(num_u, num_i, num_f) => {
            if let Some(num_f) = num_f {
                if num_f >= valid {
                    return Ok(());
                }
            }
            return Err(NumFMinErr(f.name));
        }
        Val::None => {
            if f.has_required {
                Err(NumFMinErr(f.name))
            } else {
                Ok(())
            }
        }
        _ => Err(NumFMinErr(f.name)),
    }
}

#[cfg(test)]
mod test {
    use crate::infra::validation::validate::stub::f_obj_stub;

    use super::*;

    #[test]
    fn test_num_min_ok() {
        assert_eq!(num_f_min(-42.0, &Field::of(Val::None)), Ok(()));
        assert_eq!(num_f_min(-42.0, &Field::of(Val::Num(None, None, Some(-42.0)))), Ok(()));
        assert_eq!(num_f_min(-42.0, &Field::of(Val::Num(None, None, Some(-41.9)))), Ok(()));
        assert_eq!(num_f_min(-42.0, &Field::of(Val::Num(None, None, Some(-41.0)))), Ok(()));
        assert_eq!(num_f_min(-42.0, &Field::of(Val::Num(None, None, Some(22.0)))), Ok(()));
    }

    #[test]
    fn test_num_min_err() {
        assert_eq!(
            num_f_min(-10.0, &Field::of(Val::Num(None, None, Some(-11.0)))),
            Err(NumFMinErr("foo"))
        );
        assert_eq!(
            num_f_min(-10.0, &Field::of(Val::Num(None, None, Some(-12.0)))),
            Err(NumFMinErr("foo"))
        );
    }

    #[test]
    fn test_wrong_type_err() {
        assert_eq!(num_f_min(-42.0, &f_obj_stub()), Err(NumFMinErr("foo")));
    }

    #[test]
    fn test_none_not_required() {
        assert_eq!(num_f_min(-42.0, &Field::default()), Ok(()));
    }

    #[test]
    fn test_none_required() {
        assert_eq!(num_f_min(-42.0, &Field::required()), Err(NumFMinErr("foo")));
    }
}
