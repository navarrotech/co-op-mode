// Copyright © 2024 Navarrotech

// Core
// import { useState, useEffect } from 'react'
// import { useSelector, dispatch } from '@/store'

// UI
import { UserFullName } from '@/common/UserFullName'
import { Button } from '@/elements/Button'

// Iconography
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Misc
import { useTranslation } from 'react-i18next'

export function AccountPage() {
  const { t } = useTranslation()

  return <div className='p-3'>
    <div className="level is-mobile">
      <UserFullName />
      <Button small>
        <span className="icon">
          <FontAwesomeIcon icon={faPencil} />
        </span>
        <span>{ t('actions.edit') }</span>
      </Button>
    </div>
  </div>
}
