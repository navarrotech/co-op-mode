//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

// Utility
import database from '@/lib/database'
import { sanitize } from '@/lib/protobuf'
import moment from 'moment'

const route: Route = {
  method: 'get',
  path: '/api/v1/datingProfilesForYou',
  inboundStruct: null,
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
        },
        banned: false
      },
      take: 25,
      include: {
        media: true,
        user: {
          select: {
            first_name: true
          }
        }
      }
    })

    response.status(200)
    response.sendProto('DataProfilesForYou', {
      profiles: recommendedDatingProfiles
        .map(profile => sanitize({
          id: profile.id,

          ///////////////////////////////////////////////////////////////////////////////
          // Data we intentionally don't want to send for sensitivity purposes:
          // owner_id: profile.owner_id,
          // birthday: profile.birthday,
          // created_at: profile.created_at,
          // updated_at: profile.updated_at,
          // banned: profile.banned,

          ///////////////////////////////////////////////////////////////////////////////
          // Settings data that we don't really need to send but DO need to remap:
          // hide_distance: profile.hide_distance,
          // hide_age: profile.hide_age,
          // show_sexuality: profile.show_sexuality,
          // show_gender: profile.show_gender,
          // show_pronouns: profile.show_pronouns,

          ///////////////////////////////////////////////////////////////////////////////
          // Settings data that we can harmlessly send and the frontend needs to use to operate correctly:

          dnd_mode: profile.dnd_mode,
          use_smart_photos: profile.use_smart_photos,
  
          ///////////////////////////////////////////////////////////////////////////////
          // Data we need to re-map for sensitivity purposes:
          age: profile.hide_age
            ? undefined
            : moment.utc().diff(profile.birthday, 'years'),

          distance: profile.hide_distance
            ? undefined
            : 10, // Backend units are always in miles
          // : profile.distance, // TODO: Implement distance calculation!!

          gender: profile.show_gender
            ? profile.gender
            : undefined,

          sexuality: profile.show_sexuality
            ? profile.sexuality
            : undefined,

          pronouns: profile.show_pronouns
            ? profile.pronouns
            : undefined,

          ///////////////////////////////////////////////////////////////////////////////
          // All unaltered data:

          fav_vgames: profile.fav_vgames,
          fav_vgenres: profile.fav_vgenres,
          fav_vplatforms: profile.fav_vplatforms,
          fav_vcharacter: profile.fav_vcharacter,
          likes_dnd: profile.likes_dnd,
          likes_anime: profile.likes_anime,
          likes_bgames: profile.likes_bgames,
          fav_bgames: profile.fav_bgames,
          height: profile.height,
          bio: profile.bio,
          prompts: profile.prompts,
          known_langs: profile.known_langs,
          location: profile.location,
          school: profile.school,
          job_title: profile.job_title,
          company: profile.company,
          top_song: profile.top_song,
          top_artist: profile.top_artist,
          height_unit: profile.height_unit,
          education: profile.education,
          looking_for: profile.looking_for,
          relationship: profile.relationship,
          family_plans: profile.family_plans,
          workout: profile.workout,
          personality: profile.personality,
          smokes: profile.smokes,
          drinks: profile.drinks,
          cannabis: profile.cannabis,
          wanting: profile.wanting,
          interests: profile.interests,
          dream_job: profile.dream_job,

          user: {
            first_name: profile.user.first_name
          },

          media: profile.media
        })),
      total: recommendedDatingProfiles.length
    })
  }
}

export default route
