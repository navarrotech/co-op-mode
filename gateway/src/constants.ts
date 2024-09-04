// Copyright © 2024 Navarrotech.

export const structsToTableTypes = {
  User: 'user',
  Preferences: 'preferences',
  DatingProfile: 'dating_profile',
  Limits: 'limits',
  Media: 'media',
  Likes: 'likes',
  Dislikes: 'dislikes',
  Status: 'status',
  Conversations: 'conversations',
  Messages: 'messages'
} as const

export const prefix = 'analytics'

export const today = () => new Date().toISOString().split('T')[0]

export const expireGlobalHistoryAfterSeconds = 60 * 60 * 24 * 30 // 30 days
