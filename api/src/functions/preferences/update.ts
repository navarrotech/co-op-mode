//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'
import type { preferences } from '@prisma/client'

// Utility
import * as yup from 'yup'
import { preferencesValidator } from '@/lib/validators'
import database from '@/lib/database'

type Body = {
    language?: string
}

const validator = yup.object().shape({
  body: preferencesValidator()
    .optional()
})

const route: Route = {
  method: 'patch',
  path: '/api/v1/preferences',
  validator,
  inboundStruct: 'Preferences',
  handler: async function updatePreferencesHandler(request, response) {
    const { id: owner_id } = request.session.user
    const { language } = request.body as Body

    const data: Partial<preferences> = {}

    if (language) {
      data.language = language
    }

    if (Object.keys(data).length === 0) {
      response.sendStatus(204)
      return
    }

    const preferences = await database.preferences.update({
      where: { owner_id },
      data
    })

    response.status(200)
    response.sendProto('Preferences', preferences)
  }

}

export default route

