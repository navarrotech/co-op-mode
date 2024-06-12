// Copyright © 2024 Navarrotech

import type { Request as ExpressRequest, Response as ExpressResponse, Route as ExpressRoute } from "navarrotech-express"
import type { ProtoBufTables, matchingTables } from "./lib/protobuf"
import type Prisma from "lib/database"

export type Request = ExpressRequest & {
    body: Record<string, any>
}

export type Response = ExpressResponse & {
    sendProto: <T extends ProtoBufTables>(struct: T, data: matchingTables[T]) => void
}

export type Route = {
    path: ExpressRoute["path"]
    method?: ExpressRoute["method"]
    validator?: ExpressRoute["validator"]
    middlewares?: ExpressRoute["middlewares"]
    handler: (request: Request, response: Response) => void
}

export { NextFunction } from "navarrotech-express"

export type ApiResponse<T = any> = {
    code: number
    message: string
    success: boolean
    data?: T
}
