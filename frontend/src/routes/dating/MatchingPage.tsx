// Copyright © 2024 Navarrotech

// React.js
import { useEffect } from 'react'

// Utility
import { getDatingProfilesForYou } from '@/modules/generated/routes'
import { useTranslation } from 'react-i18next'

// Components
import { Loader } from '@/elements/Loader'
import { DatingProfile } from './DatingProfile'
import { Button } from '@/elements/Button'
import { Topbar } from '../dashboard/Topbar'
import { dispatch, useSelector } from '@/store'
import { upsertForYou } from '@/modules/dating/reducer'

export function MatchingPage() {
  const profilesForYou = useSelector(state => state.dating.forYou)
  // const [ inInitializing, setInitializing, ] = useState<boolean>(true)
  // const [ profilesForYou, setProfilesForYou, ] = useState<IDatingProfile[]>([])

  const { t, } = useTranslation()

  useEffect(() => {
    if (profilesForYou?.length > 5 && profilesForYou !== null) {
      return
    }

    getDatingProfilesForYou()
      .then(({ data, }) => {
        const newProfiles = data?.profiles || []
        dispatch(
          upsertForYou(newProfiles),
        )
      })

  }, [ profilesForYou, ])

  if (profilesForYou === null) {
    return <Loader />
  }

  // TODO: Implement the "you're all caught up" message
  if (!profilesForYou.length) {
    return <>
      <Topbar />
      <div className='dashboard-content'>
        <div className='centered-content'>
          <figure className='block image is-128x128 is-centered'>
            <img src='/logo.png' alt={t('brand_name')} />
          </figure>
          <div className='block has-text-centered'>
            <p>{ t('dating.noMoreProfiles') }</p>
          </div>
          <div className='block buttons is-centered'>
            <Button primary>
              <span>{ t('dating.discoverySettings') }</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  }

  return <>
    <Topbar />
    <div className='dashboard-content no-padding'>
      <DatingProfile profile={profilesForYou[0]} />
      <DatingProfile profile={profilesForYou[1]} disabled />
    </div>
  </>
}
