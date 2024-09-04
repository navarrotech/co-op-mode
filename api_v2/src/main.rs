#[macro_use]
extern crate rocket;

use rocket::launch;

mod auth;
mod db;
mod models;
mod routes;

// Include the generated ProtoBuf code
pub mod proto {
    include!(concat!(env!("OUT_DIR"), "/proto_gen.rs"));
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/api/v2", routes![
            routes::get_user,
            routes::create_user,
            routes::update_user,
            routes::delete_user,
            // Add more routes here
        ])
}