// Copyright © 2024 Navarrotech

import type { Request as ExpressRequest, Response as ExpressResponse, Route as ExpressRoute } from "navarrotech-express"
import type Prisma from "lib/database"
import type { CompatibleProtoKeys } from "./lib/protobuf"
import type { Message } from "google-protobuf"

export type Request = ExpressRequest & {
    body: Record<string, any>
}

export type Response = ExpressResponse & {
    sendTableProto: <T extends CompatibleProtoKeys = CompatibleProtoKeys>(struct: T, data: typeof Prisma[T], message: string) => void
    sendProto: (struct: string, data: Message, message: string) => void
}

export type Route = {
    path: ExpressRoute["path"]
    method?: ExpressRoute["method"]
    validator?: ExpressRoute["validator"]
    middlewares?: ExpressRoute["middlewares"]
    handler: (request: Request, response: Response) => void
}

export { NextFunction } from "navarrotech-express"
