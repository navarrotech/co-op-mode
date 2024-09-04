use rocket::http::Status;
use rocket::request::Request;
use rocket::response::{self, Responder, Response};
use std::io::Cursor;

#[derive(Debug)]
pub enum ApiError {
    NotFound,
    DatabaseError(String),
    AuthenticationError,
    ValidationError(String),
}

impl<'r> Responder<'r, 'static> for ApiError {
    fn respond_to(self, _: &'r Request<'_>) -> response::Result<'static> {
        let (status, message) = match self {
            ApiError::NotFound => (Status::NotFound, "Resource not found"),
            ApiError::DatabaseError(err) => (Status::InternalServerError, &err),
            ApiError::AuthenticationError => (Status::Unauthorized, "Authentication failed"),
            ApiError::ValidationError(err) => (Status::BadRequest, &err),
        };

        Response::build()
            .status(status)
            .sized_body(message.len(), Cursor::new(message))
            .ok()
    }
}