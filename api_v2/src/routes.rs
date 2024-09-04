use crate::auth::AuthenticatedUser;
use crate::db::establish_connection;
use crate::models::{self, Entity as User, preferences, dating_profile, linked_accounts};
use crate::proto::{User as ProtoUser, Preferences as ProtoPreferences, DatingProfile as ProtoDatingProfile};
use rocket::serde::json::Json;
use sea_orm::{EntityTrait, ModelTrait, ActiveModelTrait, Set};

#[get("/users/<id>")]
pub async fn get_user(id: String, _auth: AuthenticatedUser) -> Json<Option<ProtoUser>> {
    let db = establish_connection().await;
    let user = User::find_by_id(id).one(&db).await.unwrap();
    
    if let Some(user) = user {
        let preferences = user.find_related(preferences::Entity).one(&db).await.unwrap();
        let dating_profile = user.find_related(dating_profile::Entity).one(&db).await.unwrap();
        
        let proto_user = ProtoUser {
            id: user.id,
            phone: user.phone,
            first_name: user.first_name,
            last_name: user.last_name,
            created_at: user.created_at.to_string(),
            updated_at: user.updated_at.to_string(),
            preferences: preferences.map(|p| ProtoPreferences {
                id: p.id,
                owner_id: p.owner_id,
                language: p.language,
            }),
            dating_profile: dating_profile.map(|dp| ProtoDatingProfile {
                id: dp.id,
                owner_id: dp.owner_id,
                age: dp.age,
                gender: dp.gender,
                // Add more fields as needed
            }),
            // Add more fields as needed
        };
        Json(Some(proto_user))
    } else {
        Json(None)
    }
}

#[post("/users", data = "<user>")]
pub async fn create_user(user: Json<ProtoUser>, _auth: AuthenticatedUser) -> Json<ProtoUser> {
    let db = establish_connection().await;
    let new_user = models::ActiveModel {
        first_name: Set(user.first_name.clone()),
        last_name: Set(user.last_name.clone()),
        phone: Set(user.phone.clone()),
        // Set other fields as needed
        ..Default::default()
    };
    let inserted_user = new_user.insert(&db).await.unwrap();
    Json(ProtoUser::from(inserted_user))
}

#[put("/users/<id>", data = "<user>")]
pub async fn update_user(id: String, user: Json<ProtoUser>, _auth: AuthenticatedUser) -> Json<ProtoUser> {
    let db = establish_connection().await;
    let mut user_to_update: models::ActiveModel = User::find_by_id(id).one(&db).await.unwrap().unwrap().into();
    user_to_update.first_name = Set(user.first_name.clone());
    user_to_update.last_name = Set(user.last_name.clone());
    user_to_update.phone = Set(user.phone.clone());
    // Update other fields as needed
    let updated_user = user_to_update.update(&db).await.unwrap();
    Json(ProtoUser::from(updated_user))
}

#[delete("/users/<id>")]
pub async fn delete_user(id: String, _auth: AuthenticatedUser) -> Json<bool> {
    let db = establish_connection().await;
    let result = User::delete_by_id(id).exec(&db).await.unwrap();
    Json(result.rows_affected > 0)
}

// Add more routes for other entities (preferences, dating_profile, linked_accounts)