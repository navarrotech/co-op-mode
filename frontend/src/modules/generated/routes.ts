
// Copyright © 2024 Navarrotech

////////////////////////////////////////////
// !! AUTO GENERATED FILE, DO NOT EDIT !! //
////////////////////////////////////////////

// To manage this file, investigate the api/scripts/generate_api_routes.ts file

import { sendProto } from "@/modules/api"

export type IAuthorizeByPhone = {
	phone: string
	OTP?: string
}
export function authorizeByPhone(data: IAuthorizeByPhone) {
    return sendProto("/auth/v1/authorizeByPhone", "AuthorizeByPhoneRequest", data as any, "POST")
}

export function logout() {
    return sendProto("/auth/v1/logout", "Blank", { i: 0 }, "POST")
}

export function check() {
    return sendProto("/auth/v1/check", "Blank", { i: 0 }, "GET")
}

export function sync() {
    return sendProto("/api/v1/sync", "Blank", { i: 0 }, "POST")
}

export type IUpdatePreferences = {
	language?: string
}
export function updatePreferences(data: IUpdatePreferences) {
    return sendProto("/api/v1/preferences", "Preferences", data as any, "PATCH")
}

export type IStatusActive = {
	time_active: number
}
export function statusActive(data: IStatusActive) {
    return sendProto("/api/v1/status/active", "EmitStatus", data as any, "PUT")
}

export function exit() {
    return sendProto("/api/v1/status/exit", "Blank", { i: 0 }, "PUT")
}

export function deleteAccount() {
    return sendProto("/api/v1/account", "Blank", { i: 0 }, "DELETE")
}

export type IUpdateAccount = {
	email?: string
	first_name?: string
	last_name?: string
}
export function updateAccount(data: IUpdateAccount) {
    return sendProto("/api/v1/account", "User", data as any, "PATCH")
}

export type IUpdateDatingProfile = {
	birthday?: date
	gender?: string
	wanting?: string[]
	height?: number
	bio?: string
	prompts?: string[]
	known_langs?: string[]
	location?: string
	location2?: string
	school?: string
	job_title?: string
	company?: string
	top_song?: string
	top_artist?: string
	pronouns?: string
	height_unit?: string
	sexuality?: string
	education?: string
	looking_for?: string
	relationship?: string
	family_plans?: string
	workout?: string
	personality?: string
	smokes?: string
	drinks?: string
	cannabis?: string
	banned?: boolean
	use_smart_photos?: boolean
	hide_distance?: boolean
	hide_age?: boolean
	dnd_mode?: boolean
	show_sexuality?: boolean
	show_gender?: boolean
	show_pronouns?: boolean
}
export function updateDatingProfile(data: IUpdateDatingProfile) {
    return sendProto("/api/v1/dating_profile", "DatingProfile", data as any, "PATCH")
}

export type INewMessage = {
	conversation_id: string
	message: string
}
export function newMessage(data: INewMessage) {
    return sendProto("/api/v1/messages", "Messages", data as any, "POST")
}

export type IUpdateMessage = {
	id: string
	content: string
}
export function updateMessage(data: IUpdateMessage) {
    return sendProto("/api/v1/messages", "EditMessage", data as any, "PATCH")
}

export type IListMessages = {
	take?: number
	skip?: number
	conversation_id: string
}
export function listMessages(data: IListMessages) {
    return sendProto("/api/v1/messages/list", "Messagelist", data as any, "POST")
}

export type IDeleteMessage = {
	id: string
}
export function deleteMessage(data: IDeleteMessage) {
    return sendProto("/api/v1/messages", "SpecifyRequest", data as any, "DELETE")
}

export type IMarkRead = {
	id: string
}
export function markRead(data: IMarkRead) {
    return sendProto("/api/v1/messages/markAsRead", "SpecifyRequest", data as any, "POST")
}

export type IMarkReceived = {
	id: string
}
export function markReceived(data: IMarkReceived) {
    return sendProto("/api/v1/messages/markAsReceived", "SpecifyRequest", data as any, "POST")
}

export type IListConversations = {
	take?: number
	skip?: number
}
export function listConversations(data: IListConversations) {
    return sendProto("/api/v1/conversations/list", "ConversationList", data as any, "POST")
}

export type IMatchLike = {
	target_id: string
	is_super: boolean
}
export function matchLike(data: IMatchLike) {
    return sendProto("/api/v1/matching/like", "Likes", data as any, "POST")
}

export type IMatchDislike = {
	target_id: string
}
export function matchDislike(data: IMatchDislike) {
    return sendProto("/api/v1/matching/like", "Dislikes", data as any, "POST")
}

export function test() {
    return sendProto("/test", "Blank", { i: 0 }, "GET")
}

export type Types = {
    IAuthorizeByPhone: IAuthorizeByPhone,
	IUpdatePreferences: IUpdatePreferences,
	IStatusActive: IStatusActive,
	IUpdateAccount: IUpdateAccount,
	IUpdateDatingProfile: IUpdateDatingProfile,
	INewMessage: INewMessage,
	IUpdateMessage: IUpdateMessage,
	IListMessages: IListMessages,
	IDeleteMessage: IDeleteMessage,
	IMarkRead: IMarkRead,
	IMarkReceived: IMarkReceived,
	IListConversations: IListConversations,
	IMatchLike: IMatchLike,
	IMatchDislike: IMatchDislike
}

export const Routes = {
    authorizeByPhone,
	logout,
	check,
	sync,
	updatePreferences,
	statusActive,
	exit,
	deleteAccount,
	updateAccount,
	updateDatingProfile,
	newMessage,
	updateMessage,
	listMessages,
	deleteMessage,
	markRead,
	markReceived,
	listConversations,
	matchLike,
	matchDislike,
	test
} as const

export type RouteNames = keyof typeof Routes

export default Routes
