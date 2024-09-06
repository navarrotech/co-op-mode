// Copyright © 2024 Navarrotech

export type NotificationSetting = {
  email: boolean
  push: boolean
}

export type NotificationPreferences = {
  // "You have a new message"
  new_message: NotificationSetting
  // "You have a new match"
  match: NotificationSetting
  // "Someone liked you"
  liked: NotificationSetting
  // "Wow you're popular! You have {{count}} new daily views"
  daily_views: NotificationSetting
  // "There are x new people in your area, do you want to see them?"
  inspiration: NotificationSetting
}

export type Notification = keyof NotificationPreferences

export async function saveNotifications(notifications: NotificationPreferences) {
  // Save to the backend here
}
