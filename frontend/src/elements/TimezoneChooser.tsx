// Copyright © 2024 Navarrotech

// Core
import { dispatch, useSelector } from '@/store'
import { setTimezone } from '@/modules/core/reducer'
import { timezones } from '@/modules/timezones'

// Types
import type { AdvancedOption } from './AdvancedSelect'

// UI
import { Button } from './Button'
import { AdvancedSelect } from './AdvancedSelect'
import { useTranslation } from 'react-i18next'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const options: AdvancedOption[] = timezones.map(tz => ({
  key: tz.tzCode,
  value: tz.tzCode,
  text: tz.label,
}))

export function TimezoneChooser() {
  const { t, } = useTranslation()
  const value = useSelector(state => state.core.timezone)

  return <AdvancedSelect
    value={value}
    icon={faClock}
    options={options}
    onSelect={(val) => {
      dispatch(
        setTimezone(val),
      )
    }}
    title={ t('timezone.select') }
  >
    <Button>
      <span className='icon'>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <span>{ value }</span>
    </Button>
  </AdvancedSelect>
}
