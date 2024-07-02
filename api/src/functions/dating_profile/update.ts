//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'
import type { dating_profile } from '@prisma/client'

// Utility
import yup, { datingProfileValidator } from '@/lib/validators'
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'

type Body = Partial<dating_profile>

const validator = yup.object().shape({
  body: datingProfileValidator(false).noUnknown()
})

const route: Route = {
  method: 'patch',
  path: '/api/v1/dating_profile',
  validator,
  inboundStruct: 'DatingProfile',
  handler: async function updateDatingProfileHandler(request, response) {
    const { id: owner_id } = request.session.user
    const datingProfile = request.body as Body

    delete datingProfile.owner_id
    delete datingProfile.created_at
    delete datingProfile.updated_at
    delete datingProfile.id

    const profile = await database.dating_profile.update({
      where: { owner_id },
      data: datingProfile
    })

    response.status(200)
    response.sendProto('DatingProfile', sanitize(profile))
  }
}

export default route

