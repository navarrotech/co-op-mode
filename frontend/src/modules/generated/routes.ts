
// Copyright © 2024 Navarrotech

////////////////////////////////////////////
// !! AUTO GENERATED FILE, DO NOT EDIT !! //
////////////////////////////////////////////

// To manage this file, investigate the api/scripts/generate_api_routes.ts file

import type { ProtoBufsTypes } from "../protobuf/ProtoTypes"
import type { SupportedLanguages } from "../language"
import { sendProto } from "@/modules/api"

type APIHeaders = {
	'Content-Type': 'application/x-protobuf' | 'application/json'
	'X-Protobuf-Struct': keyof ProtoBufsTypes,
	'Language': SupportedLanguages
}


export type IAuthorizeByPhone = {
	phone: string
	OTP?: string
}

type ApiAuthorizeByPhoneResponse<status extends 200 | 204 | 403 | 409 | 500 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IAuthResponse'] :
		status extends 204 ? ProtoBufsTypes['IAuthResponse'] :
		status extends 403 ? ProtoBufsTypes['IAuthResponse'] :
		status extends 409 ? ProtoBufsTypes['IAuthResponse'] :
		status extends 500 ? ProtoBufsTypes['IAuthResponse'] :
		null
	headers: APIHeaders
	struct: 'AuthResponse' | 'AuthResponse' | 'AuthResponse' | 'AuthResponse' | 'AuthResponse'
}

export function authorizeByPhone(data: IAuthorizeByPhone): Promise<ApiAuthorizeByPhoneResponse> {
    return sendProto<ApiAuthorizeByPhoneResponse>("/auth/v1/authorizeByPhone", "AuthorizeByPhoneRequest", data as any, "POST")
}


type ApiLogoutResponse<status extends 200 = any> = {
	status: status,
	data: null
	headers: APIHeaders
	struct: null
}

export function logout(): Promise<ApiLogoutResponse> {
    return sendProto<ApiLogoutResponse>("/auth/v1/logout", "Blank", { i: 0 }, "POST")
}


type ApiCheckResponse<status extends 200 | 401 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IAuthResponse'] :
		status extends 401 ? ProtoBufsTypes['IAuthResponse'] :
		null
	headers: APIHeaders
	struct: 'AuthResponse' | 'AuthResponse'
}

export function check(): Promise<ApiCheckResponse> {
    return sendProto<ApiCheckResponse>("/auth/v1/check", "Blank", { i: 0 }, "GET")
}


type ApiSyncResponse<status extends 200 | 400 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['ISyncResponse'] :
		status extends 400 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'SyncResponse' | 'ServerError'
}

export function sync(): Promise<ApiSyncResponse> {
    return sendProto<ApiSyncResponse>("/api/v1/sync", "Blank", { i: 0 }, "POST")
}

export type IUpdatePreferences = {
	language?: string
}

type ApiUpdatePreferencesResponse<status extends 200 | 204 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IPreferences'] :
		null
	headers: APIHeaders
	struct: null
}

export function updatePreferences(data: IUpdatePreferences): Promise<ApiUpdatePreferencesResponse> {
    return sendProto<ApiUpdatePreferencesResponse>("/api/v1/preferences", "Preferences", data as any, "PATCH")
}

export type IStatusActive = {
	time_active: number
}

type ApiStatusActiveResponse<status extends 200 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IStatus'] :
		null
	headers: APIHeaders
	struct: 'Status'
}

export function statusActive(data: IStatusActive): Promise<ApiStatusActiveResponse> {
    return sendProto<ApiStatusActiveResponse>("/api/v1/status/active", "EmitStatus", data as any, "PUT")
}


type ApiExitResponse<status extends 200 = any> = {
	status: status,
	data: null
	headers: APIHeaders
	struct: null
}

export function exit(): Promise<ApiExitResponse> {
    return sendProto<ApiExitResponse>("/api/v1/status/exit", "Blank", { i: 0 }, "PUT")
}


type ApiDeleteAccountResponse<status extends 200 | 400 | 500 = any> = {
	status: status,
	data: status extends 500 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: null
}

export function deleteAccount(): Promise<ApiDeleteAccountResponse> {
    return sendProto<ApiDeleteAccountResponse>("/api/v1/account", "Blank", { i: 0 }, "DELETE")
}

export type IUpdateAccount = {
	email?: string
	first_name?: string
	last_name?: string
}

type ApiUpdateAccountResponse<status extends 200 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IUser'] :
		null
	headers: APIHeaders
	struct: 'User'
}

export function updateAccount(data: IUpdateAccount): Promise<ApiUpdateAccountResponse> {
    return sendProto<ApiUpdateAccountResponse>("/api/v1/account", "User", data as any, "PATCH")
}

export type IUpdateDatingProfile = {
	birthday?: string
	gender?: string
	wanting?: string[]
	height?: number
	bio?: string
	prompts?: string[]
	known_langs?: string[]
	location?: string
	school?: string
	job_title?: string
	company?: string
	top_song?: string
	top_artist?: string
	pronouns?: string
	dream_job?: string
	interests?: string[]
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

type ApiUpdateDatingProfileResponse<status extends 200 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IDatingProfile'] :
		null
	headers: APIHeaders
	struct: 'DatingProfile'
}

export function updateDatingProfile(data: IUpdateDatingProfile): Promise<ApiUpdateDatingProfileResponse> {
    return sendProto<ApiUpdateDatingProfileResponse>("/api/v1/dating_profile", "DatingProfile", data as any, "PATCH")
}


type ApiGetDatingProfilesForYouResponse<status extends 200 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IDataProfilesForYou'] :
		null
	headers: APIHeaders
	struct: 'DataProfilesForYou'
}

export function getDatingProfilesForYou(): Promise<ApiGetDatingProfilesForYouResponse> {
    return sendProto<ApiGetDatingProfilesForYouResponse>("/api/v1/datingProfilesForYou", "Blank", { i: 0 }, "GET")
}

export type INewMessage = {
	conversation_id: string
	message: string
}

type ApiNewMessageResponse<status extends 201 | 404 = any> = {
	status: status,
	data: status extends 201 ? ProtoBufsTypes['IMessages'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messages' | 'ServerError'
}

export function newMessage(data: INewMessage): Promise<ApiNewMessageResponse> {
    return sendProto<ApiNewMessageResponse>("/api/v1/messages", "Messages", data as any, "POST")
}

export type IUpdateMessage = {
	id: string
	content: string
}

type ApiUpdateMessageResponse<status extends 200 | 404 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IMessages'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messages' | 'ServerError'
}

export function updateMessage(data: IUpdateMessage): Promise<ApiUpdateMessageResponse> {
    return sendProto<ApiUpdateMessageResponse>("/api/v1/messages", "EditMessage", data as any, "PATCH")
}

export type IListMessages = {
	take?: number
	skip?: number
	conversation_id: string
}

type ApiListMessagesResponse<status extends 200 | 404 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IMessagelist'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messagelist' | 'ServerError'
}

export function listMessages(data: IListMessages): Promise<ApiListMessagesResponse> {
    return sendProto<ApiListMessagesResponse>("/api/v1/messages/list", "Messagelist", data as any, "POST")
}

export type IDeleteMessage = {
	id: string
}

type ApiDeleteMessageResponse<status extends 200 | 404 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IMessages'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messages' | 'ServerError'
}

export function deleteMessage(data: IDeleteMessage): Promise<ApiDeleteMessageResponse> {
    return sendProto<ApiDeleteMessageResponse>("/api/v1/messages", "SpecifyRequest", data as any, "DELETE")
}

export type IMarkRead = {
	id: string
}

type ApiMarkReadResponse<status extends 201 | 404 = any> = {
	status: status,
	data: status extends 201 ? ProtoBufsTypes['IMessages'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messages' | 'ServerError'
}

export function markRead(data: IMarkRead): Promise<ApiMarkReadResponse> {
    return sendProto<ApiMarkReadResponse>("/api/v1/messages/markAsRead", "SpecifyRequest", data as any, "POST")
}

export type IMarkReceived = {
	id: string
}

type ApiMarkReceivedResponse<status extends 201 | 404 = any> = {
	status: status,
	data: status extends 201 ? ProtoBufsTypes['IMessages'] :
		status extends 404 ? ProtoBufsTypes['IServerError'] :
		null
	headers: APIHeaders
	struct: 'Messages' | 'ServerError'
}

export function markReceived(data: IMarkReceived): Promise<ApiMarkReceivedResponse> {
    return sendProto<ApiMarkReceivedResponse>("/api/v1/messages/markAsReceived", "SpecifyRequest", data as any, "POST")
}

export type IListConversations = {
	take?: number
	skip?: number
}

type ApiListConversationsResponse<status extends 200 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IConversationList'] :
		null
	headers: APIHeaders
	struct: 'ConversationList'
}

export function listConversations(data: IListConversations): Promise<ApiListConversationsResponse> {
    return sendProto<ApiListConversationsResponse>("/api/v1/conversations/list", "ConversationList", data as any, "POST")
}

export type IMatchLike = {
	target_id: string
	is_super: boolean
}

type ApiMatchLikeResponse<status extends 200 | 201 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['ILikes'] :
		status extends 201 ? ProtoBufsTypes['ILikes'] :
		null
	headers: APIHeaders
	struct: 'Likes' | 'Likes'
}

export function matchLike(data: IMatchLike): Promise<ApiMatchLikeResponse> {
    return sendProto<ApiMatchLikeResponse>("/api/v1/matching/like", "Likes", data as any, "POST")
}

export type IMatchDislike = {
	target_id: string
}

type ApiMatchDislikeResponse<status extends 200 | 201 = any> = {
	status: status,
	data: status extends 200 ? ProtoBufsTypes['IDislikes'] :
		status extends 201 ? ProtoBufsTypes['IDislikes'] :
		null
	headers: APIHeaders
	struct: 'Dislikes' | 'Dislikes'
}

export function matchDislike(data: IMatchDislike): Promise<ApiMatchDislikeResponse> {
    return sendProto<ApiMatchDislikeResponse>("/api/v1/matching/like", "Dislikes", data as any, "POST")
}


type ApiTestResponse<status extends 200 = any> = {
	status: status,
	data: null
	headers: APIHeaders
	struct: null
}

export function test(): Promise<ApiTestResponse> {
    return sendProto<ApiTestResponse>("/test", "Blank", { i: 0 }, "GET")
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
	getDatingProfilesForYou,
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
