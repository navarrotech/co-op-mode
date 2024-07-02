//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Utility
import yup, { type ListRouteBody, listRouteValidator } from '@/lib/validators'
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'

const validator = yup.object().shape({
  body: yup.object().shape({
    conversation_id: yup
      .string()
      .typeError('')
      .trim()
      .uuid()
      .required('')
  })
    .concat(listRouteValidator())
    .noUnknown()
})

type Body = ListRouteBody & {
    conversation_id: string
}

const route: Route = {
  method: 'post',
  path: '/api/v1/messages/list',
  validator,
  inboundStruct: 'Messagelist',
  handler: async function listMessagesHandler(request, response) {
    const { id: owner_id } = request.session.user

    const { conversation_id, skip, take } = request.body as Body

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
      response.sendProto('ServerError', {
        message: request.__('conversation_not_found')
      })
      return
    }

    const messages = await database.messages.findMany({
      where: {
        conversation_id
      },
      take: take + 1,
      skip,
      orderBy: {
        created_at: 'desc'
      }
    })

    const has_more = take + 1 === messages.length
    has_more ? messages.pop() : null

    response.status(200)
    response.sendProto('Messagelist', {
      skip,
      take,
      // TODO: implement "total" count:
      total: messages.length,
      conversation_id,
      messages: sanitize(messages) as any,
      has_more
    })
  }

}

export default route
