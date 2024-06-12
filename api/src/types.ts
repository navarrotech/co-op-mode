// Copyright © 2024 Navarrotech

import type {
    Request as ExpressRequest,
    Response as ExpressResponse,
    Route as ExpressRoute
} from "navarrotech-express"

import type { ProtoBufTables, ProtoBufs } from "./lib/protobuf"

import type { __, TranslateOptions } from "i18n"
import type locales from "@/locales/en.json"

//////////////////////////////////////////////////////
// Utilities

// Type utility to get the properties of a type that are not functions
type NonFunctionProperties<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunction<T> = Pick<T, NonFunctionProperties<T>>;

//////////////////////////////////////////////////////
// Routes

export type Request = ExpressRequest & {
    body: Record<string, any>
    // __: typeof __ // i18n
    __: (key: keyof typeof locales | TranslateOptions, ...replace: string[]) => string
}

export type Response = ExpressResponse & {
    sendProto: <T extends ProtoBufTables>(struct: T, data: Partial<NonFunction<ReturnType<typeof ProtoBufs[T]['create']>>>) => void
}

export type Route = {
    path: ExpressRoute["path"]
    method?: ExpressRoute["method"]
    validator?: ExpressRoute["validator"]
    middlewares?: ExpressRoute["middlewares"]
    handler: (request: Request, response: Response) => void
}

export { NextFunction } from "navarrotech-express"

//////////////////////////////////////////////////////
// Other
