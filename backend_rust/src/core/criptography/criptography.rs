use data_encoding::HEXUPPER;
use ring::rand::SecureRandom;
use ring::{digest, pbkdf2, rand};
use std::num::NonZeroU32;

const CREDENTIAL_LEN: usize = digest::SHA512_OUTPUT_LEN;
const N_ITER: NonZeroU32 = NonZeroU32::new(100_000).unwrap();

pub fn encode(password: String, salt: String) -> String {
    let mut generated_value = [0u8; CREDENTIAL_LEN];
    pbkdf2::derive(
        pbkdf2::PBKDF2_HMAC_SHA512,
        N_ITER,
        salt.as_bytes(),
        password.as_bytes(),
        &mut generated_value,
    );
    return HEXUPPER.encode(&generated_value);
}

pub fn generate_salt() -> String {
    let rng = rand::SystemRandom::new();
    let mut salt = [0u8; CREDENTIAL_LEN];
    rng.fill(&mut salt);
    return HEXUPPER.encode(&salt);
}

pub fn verify_password(password: String, salt: String, password_to_verify: String) -> bool {
    let verify = pbkdf2::verify(
        pbkdf2::PBKDF2_HMAC_SHA512,
        N_ITER,
        salt.as_bytes(),
        password_to_verify.as_bytes(),
        password.as_bytes(),
    );

    return verify.is_ok();
}

#[test]
fn test_generate_salt() {
    let salt = generate_salt();
    assert!(!salt.is_empty());
}

#[test]
fn test_encode_password() {
    let password = String::from("12345");
    let salt = generate_salt();
    let encoded_password = encode(password, salt);
    assert!(!encoded_password.is_empty());
}

#[test]
fn test_verify_password() {
    let password = String::from("12345");
    let wrong_password = String::from("54321");
    let salt = generate_salt();
    let encoded_password = encode(password, salt);
    assert!(verify_password(encoded_password, salt, password));
    assert!(!verify_password(encoded_password, salt, wrong_password));
}
