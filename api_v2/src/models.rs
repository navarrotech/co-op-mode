use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

// User model
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "users")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: String,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub email: Option<String>,
    pub phone: String,
    pub created_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_one = "super::preferences::Entity")]
    Preferences,
    #[sea_orm(has_one = "super::dating_profile::Entity")]
    DatingProfile,
    #[sea_orm(has_many = "super::linked_accounts::Entity")]
    LinkedAccounts,
}

impl ActiveModelBehavior for ActiveModel {}

// Preferences model
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "preferences")]
pub struct PreferencesModel {
    #[sea_orm(primary_key)]
    pub id: String,
    pub owner_id: String,
    pub language: String,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum PreferencesRelation {
    #[sea_orm(
        belongs_to = "super::user::Entity",
        from = "Column::OwnerId",
        to = "super::user::Column::Id"
    )]
    User,
}

impl ActiveModelBehavior for PreferencesActiveModel {}

// DatingProfile model
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "dating_profile")]
pub struct DatingProfileModel {
    #[sea_orm(primary_key)]
    pub id: String,
    pub owner_id: String,
    pub age: Option<i32>,
    pub gender: Option<String>,
    // Add more fields as needed
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum DatingProfileRelation {
    #[sea_orm(
        belongs_to = "super::user::Entity",
        from = "Column::OwnerId",
        to = "super::user::Column::Id"
    )]
    User,
}

impl ActiveModelBehavior for DatingProfileActiveModel {}

// LinkedAccounts model
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "linked_accounts")]
pub struct LinkedAccountsModel {
    #[sea_orm(primary_key)]
    pub id: String,
    pub owner_id: String,
    pub provider: String,
    pub version: String,
    pub account_id: String,
    pub username: String,
    pub token: String,
    pub metadata: Json,
    pub created_at: DateTimeWithTimeZone,
    pub last_used_at: DateTimeWithTimeZone,
    pub updated_at: DateTimeWithTimeZone,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum LinkedAccountsRelation {
    #[sea_orm(
        belongs_to = "super::user::Entity",
        from = "Column::OwnerId",
        to = "super::user::Column::Id"
    )]
    User,
}

impl ActiveModelBehavior for LinkedAccountsActiveModel {}
