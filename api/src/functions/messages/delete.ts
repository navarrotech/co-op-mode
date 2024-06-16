// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import yup from "@/lib/validators"
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"

const validator = yup.object().shape({
    body: yup.object().shape({
        message_id: yup
            .string()
            .typeError("")
            .trim()
            .uuid()
            .required("")
    }).noUnknown()
})

type Body = {
    message_id: string
}

const route: Route = {
    method: "delete",
    path: "/api/v1/messages",
    validator,
    handler: async function deleteMessageHandler(request, response) {
        const { id: owner_id } = request.session.user

        const { message_id } = request.body as Body

        const message = await database.messages.findUnique({
            where: {
                id: message_id
            }
        })

        const conversation = await database.conversations.findUnique({
            where: {
                id: message.conversation_id
            }
        })

        // Ensure they have permission to mark the message as read
        if (conversation.user1_id !== owner_id && conversation.user2_id !== owner_id) {
            response.status(404)
            response.sendProto("ServerError", {
                message: request.__("conversation_not_found")
            })
            return
        }

        const updatedMessage = await database.messages.update({
            where: {
                id: message_id
            },
            data: {
                is_deleted: true,
                time_deleted: new Date(),
            }
        })

        response.status(200)
        response.sendProto("Messages", sanitize(updatedMessage))
    }

}

export default route
