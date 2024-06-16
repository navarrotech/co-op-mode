// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "@/types"

// Utility
import yup from "@/lib/validators"
import database from "@/lib/database"
import { sanitize } from "@/lib/protobuf"

const validator = yup.object().shape({
    body: yup.object().shape({
        conversation_id: yup
            .string()
            .typeError("")
            .trim()
            .uuid()
            .required(""),
        message: yup
            .string()
            .typeError("")
            .trim()
            .min(1)
            .max(512)
            .required(""),
    }).noUnknown()
})

type Body = {
    conversation_id: string
    message: string
}

const route: Route = {
    method: "post",
    path: "/api/v1/messages",
    validator,
    handler: async function newMessageHandler(request, response) {
        const { id: owner_id } = request.session.user

        const { conversation_id, message } = request.body as Body

        // Check if the conversation exists
        const conversation = await database.conversations.findUnique({
            where: {
                id: conversation_id
            }
        })

        // Do they have permission to send a message?
        const isParticipant = conversation.user1_id === owner_id || conversation.user2_id === owner_id

        if (!conversation || !isParticipant) {
            response.status(404)
            response.sendProto("ServerError", {
                message: request.__("conversation_not_found")
            })
            return
        }

        const [ newMessage ] = await Promise.all([
            database.messages.create({
                data: {
                    owner_id,
                    conversation_id,
                    message,
                }
            }),
            database.conversations.update({
                where: {
                    id: conversation_id
                },
                data: {
                    last_message: new Date()
                }
            }),
        ])

        response.status(201)
        response.sendProto("Messages", sanitize(newMessage))
    }

}

export default route
