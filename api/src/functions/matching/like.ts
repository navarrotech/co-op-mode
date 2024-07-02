//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Utility
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'
import yup from '@/lib/validators'

const validator = yup.object().shape({
  body: yup.object().shape({
    target_id: yup
      .string()
      .typeError('')
      .trim()
      .uuid()
      .required(''),
    is_super: yup
      .boolean()
      .typeError('')
      .default(false)
      .required('')
  }).noUnknown()
})

type Body = {
    target_id: string
    is_super: boolean
}

const route: Route = {
  method: 'post',
  path: '/api/v1/matching/like',
  validator,
  inboundStruct: 'Likes',
  handler: async function matchLikeHandler(request, response) {
    const { id: owner_id } = request.session.user

    const { target_id, is_super } = request.body as Body

    const [ exists ] = await Promise.all([
      database.likes.findFirst({
        where: {
          owner_id,
          target_id
        }
      }),
      database.dislikes.deleteMany({
        where: {
          owner_id,
          target_id
        }
      })
    ])

    if (exists) {
      if (exists.is_super !== is_super) {
        await database.likes.update({
          where: {
            id: exists.id
          },
          data: {
            is_super
          }
        })
      }

      response.status(200)
      response.sendProto('Likes', sanitize(exists))
      return
    }

    const [ likeDoc, potentialMatch ] = await Promise.all([
      database.likes.create({
        data: {
          owner_id,
          target_id,
          is_super
        }
      }),
      // Was it a match?
      database.likes.findFirst({
        where: {
          owner_id: target_id,
          target_id: owner_id
        }
      })
    ])

    if (potentialMatch) {
      await database.conversations.create({
        data: {
          user1_id: owner_id,
          user2_id: target_id
        }
      })
    }

    response.status(201)
    response.sendProto('Likes', sanitize(likeDoc))
  }
}

export default route
