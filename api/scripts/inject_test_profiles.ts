// Copyright © 2024 Navarrotech

import type{ Gender } from '@prisma/client'
import database from '../src/lib/database'
import Fakerator from 'fakerator'

/*
 * This script is meant to be ran as a separate script to inject test profiles into the database.
 * It is meant to generate mock data for development and testing purposes, and should NEVER be used in production.
 * To run: `ts-node -r tsconfig-paths/register scripts/inject_test_profiles.ts`
 * Note: You may need to execute this command in the docker container! Becuase that's how it connects to the postgresql network.
 */

// https://www.npmjs.com/package/fakerator
const faker = Fakerator()

const options = process.argv
console.log(options)

if (options.includes('--help')) {
  console.log(`Usage: ts-node api/scripts/inject_test_profiles.ts
Options:
  --items=number  Number of items to inject (default: 100)
  --clear         Clear all faker profiles previously created
`)
  process.exit(0)
}

async function clear() {
  console.log('Clearing all faker profiles...')
  const users = await database.users.findMany({
    where: {
      email: {
        startsWith: 'FAKER-'
      }
    }
  })

  await database.media.deleteMany({
    where: {
      owner_id: {
        in: users.map(user => user.id)
      }
    }
  })

  await database.dating_profile.deleteMany({
    where: {
      owner_id: {
        in: users.map(user => user.id)
      }
    }
  })

  await database.users.deleteMany({
    where: {
      email: {
        startsWith: 'FAKER-'
      }
    }
  })
}

if (options.includes('--clear')) {
  clear()
  process.exit(0)
}

const itemsToInject = options.find(option => option.startsWith('--items=')) || '--items=100'
const itemCount = parseInt(itemsToInject.split('=')[1])

async function main() {
  console.log(`Starting to inject ${itemCount} test profiles...`)

  for (let i = 0; i < itemCount; i++) {
    const userData = {
      first_name: faker.names.firstName(),
      last_name: faker.names.lastName(),
      email: 'FAKER-' + faker.internet.email(),
      phone: faker.phone.number().slice(0, 16)
    }
    console.log(userData)

    const user = await database.users.create({
      data: userData
    })

    const gender: Gender = faker.random.arrayElement([
      'Female',
      'Male',
      'NonBinary'
    ])

    const mediaPersonality = faker.random.arrayElement(
      profilePictures[
        gender === 'NonBinary'
          ? (Math.random() > 0.5 ? 'Male' : 'Female')
          : gender
      ]
    )

    const wanting = [
      'Male', 'Female', 'NonBinary'
    ].filter(() => Math.random() > 0.5) as Gender[]

    const datingProfile = await database.dating_profile.create({
      data: {
        owner_id: user.id,
        birthday: faker.date.past(80, new Date(2000, 0, 1)),
        gender,
        wanting,
        relationship: faker.random.arrayElement([
          'Unknown',
          'Monogomy',
          'EthicalNonMonogomy',
          'OpenRelationship',
          'Polyamory',
          'OpenToExploring'
        ]),
        height: faker.random.number(72),
        bio: faker.lorem.paragraph()
        
        // TODO: Add more information to these fake profiles
      }
    })

    await Promise.all([
      database.media.create({
        data: {
          owner_id: user.id,
          profile_id: datingProfile.id,
          url: mediaPersonality[0],
          mime_type: 'image/jpeg',
          file_size: 1_000
        }
      }),
      database.media.create({
        data: {
          owner_id: user.id,
          profile_id: datingProfile.id,
          url: mediaPersonality[1],
          mime_type: 'image/jpeg',
          file_size: 1_000
        }
      }),
      database.media.create({
        data: {
          owner_id: user.id,
          profile_id: datingProfile.id,
          url: mediaPersonality[2],
          mime_type: 'image/jpeg',
          file_size: 1_000
        }
      })
    ])
  }

  console.log('Finished!')
  process.exit(0)
}

const profilePictureUrlsNataliePortman = [
  'https://pbs.twimg.com/media/CpQC8ExXYAAk9Kl.jpg',
  'https://i.pinimg.com/originals/6a/ea/05/6aea0525d4a344cd1eef2081269c2de1.jpg',
  'https://www.hollywoodreporter.com/wp-content/uploads/2015/05/bts_natalie_portman_clean.jpg?w=1024'
]

const profilePictureUrlsChrisPratt = [
  'https://media.glamour.com/photos/5696562493ef4b0952107eed/master/pass/health-fitness-2013-07-chris-pratt-main.jpg',
  'https://i.pinimg.com/736x/12/0d/f5/120df58c6bcd176820f1f3ae285d0a0c.jpg',
  'https://i.pinimg.com/736x/b9/e4/0e/b9e40e40076d4432606c9124cee41485.jpg'
]

const profilePictureUrlsScarlettJohansson = [
  'https://pics.craiyon.com/2023-07-16/544fdd0f122247b18bd39ad76ca42026.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTaDHh0A3zULZA-HxztBl0zFxHU8LDZZ6Cw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlI9IMiE2pujCARrgjcx9G1K44RZhcvERXQ&s'
]

const profilePictureUrlsRobertDowneyJr = [
  'https://i.pinimg.com/originals/ae/d8/0d/aed80d60d7fb15f7ab9c2fa062661f24.jpg',
  'https://people.com/thmb/-vadPFlzjmr8Rd4HMWwT_9aITEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(899x0:901x2)/gwyneth-paltrow3-f259c31b8d6e4168a6844af3b51c3b1f.jpg',
  'https://i.pinimg.com/474x/d0/c6/31/d0c631557e9237666c6b9ca578ed7cdc.jpg'
]

const profilePictureUrlsTomHolland = [
  'https://i.dailymail.co.uk/1s/2019/04/24/06/12645372-0-image-a-63_1556083140144.jpg',
  'https://i.pinimg.com/originals/15/e7/2c/15e72c1d05b294243c116c09be0004e1.jpg',
  'https://pm1.aminoapps.com/6857/8f38bbeb8004906331c1f26b1b8d873048bd5fa4v2_hq.jpg'
]

const profilePictureUrlsZendaya = [
  'https://www.hollywoodreporter.com/wp-content/uploads/2024/04/Zendaya-Challengers-LA-Premiere-GettyImages-2147868269-H-2024.jpg',
  'https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA0NjIwNzQ2MDE2Njk1NjEx/zendaya-dune-two-press-tour.jpg',
  'https://media1.popsugar-assets.com/files/thumbor/cuU_oaOukaz5Ceg_U5J5JWqct6g=/fit-in/2000x3000/filters:format_auto():extract_cover():upscale()/2019/07/18/074/n/44498184/4f4bc168fba3a6d5_GettyImages-499734064.jpg'
]

const profilePictureUrlsBenedictCumberbatch = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/BCumberbatch_Comic-Con_2019.jpg',
  'https://cdn.britannica.com/96/173696-050-7070A29D/Benedict-Cumberbatch-British-stage-screen.jpg',
  'https://bifa.imgix.net/web/2018/10/ca2.jpg?auto=compress%2Cformat&fit=scale&h=2115&ixlib=php-3.3.1&w=1600&wpsize=xl'
]

const profilePictureUrlsTomHiddleston = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg',
  'https://media.gq.com/photos/5898d726112b37414c82251d/master/w_1600%2Cc_limit/0317-GQ-FATH01-01_sq.jpg',
  'https://www.usatoday.com/gcdn/-mm-/41dadc35e52cd6b9357480900099a773a441a7fb/c=0-294-3264-2147/local/-/media/USATODAY/GenericImages/2013/11/05/1383681614000-XXX-TOM-HIDDLESTON-PORTRAIT-TP0013-59635004.JPG?width=3200&height=1817&fit=crop&format=pjpg&auto=webp'
]

const profilePictureUrlsTaylorSwift = [
  'https://www.billboard.com/wp-content/uploads/2024/06/taylor-swift-eras-tour-liverpool-tortured-poets-june-2023-billboard-1548.jpg?w=942&h=623&crop=1',
  'https://static01.nyt.com/images/2022/10/24/arts/24taylor-notebook3/24taylor-notebook3-superJumbo.jpg',
  'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/12/14/17025736342331.jpg'
]

const profilePictureUrlsErinMoriarty = [
  'https://nypost.com/wp-content/uploads/sites/2/2022/09/Erin-Moriarty-13.jpg?quality=75&strip=all&w=819',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl0QevXhXoGkHAh2D2pYCAu25QBDxsUwapw&s',
  'https://www.usmagazine.com/wp-content/uploads/2024/01/The-Boys-Erin-Moriarty-Slams-Plastic-Surgery-Claims-Is-Horrified-by-Megyn-Kellys-Claims-inline.jpg?w=1000&quality=86&strip=all'
]

const profilePictures = {
  Male: [
    profilePictureUrlsChrisPratt,
    profilePictureUrlsRobertDowneyJr,
    profilePictureUrlsTomHolland,
    profilePictureUrlsBenedictCumberbatch,
    profilePictureUrlsTomHiddleston
  ],
  Female: [
    profilePictureUrlsNataliePortman,
    profilePictureUrlsScarlettJohansson,
    profilePictureUrlsZendaya,
    profilePictureUrlsTaylorSwift,
    profilePictureUrlsErinMoriarty
  ]
}


main()
