//Copyright © 2024 Navarrotech.

// Typescript
import type { MessageHistory, Route } from '@/types'

// Utility
import yup from '@/lib/validators'
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'

const validator = yup.object().shape({
  body: yup.object().shape({
    id: yup
      .string()
      .typeError('')
      .trim()
      .uuid()
      .required(''),
    content: yup
      .string()
      .typeError('')
      .trim()
      .min(1)
      .max(512)
      .required('')
  }).noUnknown()
})

type Body = {
    id: string
    content: string
}

const route: Route = {
  method: 'patch',
  path: '/api/v1/messages',
  validator,
  inboundStruct: 'EditMessage',
  handler: async function updateMessageHandler(request, response) {
    const { id: owner_id } = request.session.user

    const { id: message_id, content: newContent } = request.body as Body

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
      response.sendProto('ServerError', {
        message: request.__('conversation_not_found')
      })
      return
    }

    if (newContent !== message.message) {
      response.status(200)
      response.sendProto('Messages', sanitize(message) as any)
      return
    }

    const currentHistory = message.edit_history as MessageHistory[]

    const updatedMessage = await database.messages.update({
      where: {
        id: message_id
      },
      data: {
        message: newContent,
        is_edited: true,
        time_edited: new Date(),
        edit_history: [
          {
            message: message.message,
            time_edited: message.time_edited
          },
          ...currentHistory
        ]
      }
    })

    response.status(200)
    response.sendProto('Messages', sanitize(updatedMessage) as any)
  }

}

export default route
