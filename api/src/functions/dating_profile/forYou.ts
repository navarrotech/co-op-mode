//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Utility
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'

const route: Route = {
  method: 'get',
  path: '/api/v1/datingProfilesForYou',
  inboundStruct: undefined,
  handler: async function getDatingProfilesForYouHandler(request, response) {
    const { id: owner_id } = request.session.user

    // TODO: Maybe move this to account or a settings table?
    // TODO: More settings like "max distance away" or "age range"
    // TODO: Add more advanced matching based on similar interests and likes

    const [ myDatingProfile, myLikes, myDislikes ] = await Promise.all([
      database.dating_profile.findUnique({
        where: {
          owner_id
        }
      }),
      database.likes.findMany({
        where: {
          owner_id
        },
        select: {
          target_id: true
        }
      }),
      database.dislikes.findMany({
        where: {
          owner_id
        },
        select: {
          target_id: true
        }
      })
    ])

    const alreadyLikedIds = [
      ...myLikes.map(like => like.target_id),
      ...myDislikes.map(dislike => dislike.target_id)
    ]

    const { wanting } = myDatingProfile

    const recommendedDatingProfiles = await database.dating_profile.findMany({
      where: {
        id: {
          notIn: alreadyLikedIds
        },
        gender: {
          in: wanting
        }
      },
      take: 25,
      include: {
        media: true
      }
    })

    response.status(200)
    response.sendProto('DataProfilesForYou', {
      profiles: recommendedDatingProfiles.map(profile => sanitize(profile)),
      total: recommendedDatingProfiles.length
    })
  }
}

export default route
