// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import yup, { type ListRouteBody, listRouteValidator } from "@/lib/validators"
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"

const validator = yup.object().shape({
    body: listRouteValidator()
        .noUnknown()
})

type Body = ListRouteBody & {
    
}

const route: Route = {
    method: "post",
    path: "/api/v1/conversations/list",
    validator,
    inboundStruct: "ConversationList",
    handler: async function listConversationsHandler(request, response) {
        const { id: owner_id } = request.session.user

        const { skip, take } = request.body as Body

        const conversations = await database.conversations.findMany({
            where: {
                OR: [
                    { user1_id: owner_id },
                    { user2_id: owner_id },
                ]
            },
            skip,
            take: take + 1,
            orderBy: {
                last_message: "desc"
            },
            include: {
                // TODO: implement "total" count:
                _count: true
            }
        })

        const has_more = take + 1 === conversations.length
        const more = has_more ? conversations.pop() : null

        response.status(200)
        response.sendProto("ConversationList", {
            skip,
            take,
            total: conversations.length,
            conversations: sanitize(conversations),
            has_more,
        })
    }

}

export default route
