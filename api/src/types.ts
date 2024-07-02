//Copyright © 2024 Navarrotech.

import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction
} from 'express'

import type { ProtoBufTables, ProtoBufs } from './lib/protobuf'
import type { Session } from 'express-session'
import type i18nAPI from 'i18n'
import type { SupportedLanguages } from './lib/language'
import type { users } from '@prisma/client'
import type { AnyObjectSchema } from 'yup'

//////////////////////////////////////////////////////
// Utilities

// Type utility to get the properties of a type that are not functions
type NonFunctionProperties<T> = {
    [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

type NonFunction<T> = Pick<T, NonFunctionProperties<T>>

//////////////////////////////////////////////////////
// Routes

export type Request = ExpressRequest & {
    body: Record<string, any>,
    language: SupportedLanguages // Language code, from accept-language header and validated by middleware
    __:   typeof i18nAPI.__   // i18n :: For singular translations
    __n:  typeof i18nAPI.__n  // i18n :: For plural translations
    __mf: typeof i18nAPI.__mf // i18n :: For message format library translations
    __l:  typeof i18nAPI.__l  // i18n :: For listing all translations from a single key
    __h:  typeof i18nAPI.__h  // i18n :: For getting the entire translation hash
    session: {
        user: users & Record<string, any>
        authorized: boolean
        saveAsync: () => Promise<void>
        destroyAsync: () => Promise<void>
        reloadAsync: () => Promise<void>
        regenerateAsync: () => Promise<void>
    } & Session
}

export type Response = ExpressResponse & {
    sendProto: <T extends ProtoBufTables>(struct: T, data: Partial<NonFunction<ReturnType<typeof ProtoBufs[T]['create']>>>) => void
}

export type RouteHandler = (request: Request, response: Response, next: NextFunction) => void

export type Route = {
    path: string
    method?: 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch'
    inboundStruct: ProtoBufTables | null,
    validator?: AnyObjectSchema
    middlewares?: any[]
    handler: RouteHandler
}

export { NextFunction } from 'express'

//////////////////////////////////////////////////////
// Other

export type MessageHistory = {
    message: string
    time_edited: string
}
