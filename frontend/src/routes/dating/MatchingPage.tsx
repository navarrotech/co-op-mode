// Copyright © 2024 Navarrotech

// Typescript
import type { IDatingProfile } from '@/modules/protobuf/schema'

// React.js
import { useState, useEffect } from 'react'

// Utility
import { getDatingProfilesForYou } from '@/modules/generated/routes'
import { useTranslation } from 'react-i18next'

// Components
import Loader from '@/elements/Loader'
import DatingProfile from './DatingProfile'
import Button from '@/elements/Button'

export default function MatchingPage() {
  const [ inInitializing, setInitializing ] = useState<boolean>(true)
  const [ profilesForYou, setProfilesForYou ] = useState<IDatingProfile[]>([])

  const { t } = useTranslation()

  useEffect(() => {
    if (profilesForYou.length > 5) {
      return
    }

    getDatingProfilesForYou()
      .then(({ data, status }) => {
        if (status === 200) {
          const newProfiles = data?.profiles || []
          if (newProfiles.length) {
            setProfilesForYou(profiles => ([ ...profiles, ...newProfiles ]))
          }
        }
        setInitializing(false)
      })

  }, [ profilesForYou ])

  if (inInitializing) {
    return <Loader />
  }

  // TODO: Implement the "you're all caught up" message
  if (!profilesForYou.length) {
    return <div className='centered-content'>
      <figure className="block image is-128x128 is-centered">
        <img src='/logo.png' alt={t('brand_name')} />
      </figure>
      <div className="block has-text-centered">
        <p>There's no one around you. Expand your discovery settings to see more people.</p>
      </div>
      <div className="block buttons is-centered">
        <Button primary>
          <span>Discovery Settings</span>
        </Button>
      </div>
    </div>
  }

  return <DatingProfile profile={profilesForYou[0]} />
}
