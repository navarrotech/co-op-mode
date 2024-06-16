// Copyright © 2024 Navarrotech

import database from "@/lib/database"

export async function deleteConversation(conversation_id: string) {
    await database.messages.deleteMany({
        where: {
            conversation_id
        }
    })
    await database.conversations.delete({
        where: {
            id: conversation_id
        }
    })
}
