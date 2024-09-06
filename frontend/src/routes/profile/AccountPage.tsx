// Copyright © 2024 Navarrotech

// Core
// import { useState, useEffect } from 'react'
// import { useSelector, dispatch } from '@/store'

// UI
import { UserFullName } from '@/common/UserFullName'
import { Topbar } from '../dashboard/Topbar'
import { Button } from '@/elements/Button'

// Iconography
import { faCog, faPencil, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Misc
import { useTranslation } from 'react-i18next'
import { urls } from '../urls'

export function AccountPage() {
  const { t, } = useTranslation()

  return <>
    <Topbar
      noLogo
      icon={faUser}
      title='pages.account'
    >
      <Button
        id='settings-button'
        to={urls.settings}
        className='is-borderless'
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faCog} />
        </span>
      </Button>
    </Topbar>
    <div className='dashboard-content'>
      <div className='level is-mobile'>
        <UserFullName />
        <Button small>
          <span className='icon'>
            <FontAwesomeIcon icon={faPencil} />
          </span>
          <span>{ t('actions.edit') }</span>
        </Button>
      </div>
    </div>
  </>
}
