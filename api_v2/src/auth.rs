use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use rocket::http::Status;
use rocket::request::{FromRequest, Outcome};
use rocket::Request;
use serde::{Deserialize, Serialize};
use std::env;

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: String,
    pub exp: usize,
}

pub struct AuthenticatedUser(pub String);

#[rocket::async_trait]
impl<'r> FromRequest<'r> for AuthenticatedUser {
    type Error = ();

    async fn from_request(request: &'r Request<'_>) -> Outcome<Self, Self::Error> {
        let token = request.headers().get_one("Authorization");
        match token {
            Some(token) if token.starts_with("Bearer ") => {
                let token = &token[7..];
                if let Ok(claims) = decode_token(token) {
                    Outcome::Success(AuthenticatedUser(claims.sub))
                } else {
                    Outcome::Failure((Status::Unauthorized, ()))
                }
            }
            _ => Outcome::Failure((Status::Unauthorized, ())),
        }
    }
}

pub fn encode_token(user_id: &str) -> String {
    let secret = env::var("JWT_SECRET").expect("JWT_SECRET must be set");
    let claims = Claims {
        sub: user_id.to_string(),
        exp: (chrono::Utc::now() + chrono::Duration::hours(24)).timestamp() as usize,
    };
    encode(&Header::default(), &claims, &EncodingKey::from_secret(secret.as_bytes()))
        .expect("Failed to encode token")
}

pub fn decode_token(token: &str) -> Result<Claims, jsonwebtoken::errors::Error> {
    let secret = env::var("JWT_SECRET").expect("JWT_SECRET must be set");
    decode::<Claims>(
        token,
        &DecodingKey::from_secret(secret.as_bytes()),
        &Validation::default(),
    )
    .map(|data| data.claims)
}
