// Copyright © 2024 Navarrotech

import { dispatch, useSelector } from '@/store'
import { languageLocalizedRecord, languageToFlag, supportedLanguages } from '@/modules/language'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AdvancedSelect } from './AdvancedSelect'
import { setLanguage } from '@/modules/core/reducer'
import { useTranslation } from 'react-i18next'
import { updatePreferences } from '@/modules/generated/routes'
import { setPreferences } from '@/modules/auth/reducer'
import { Button } from './Button'

type Props = {
  button?: boolean
}

export function LanguageChooser({ button = false, }: Props) {
  const authorized = useSelector(state => state.user.authorized)
  const language = useSelector(state => state.core.language)
  const { t, i18n, } = useTranslation()
  
  const children = <>
    <span className='icon'>
      <FontAwesomeIcon icon={faGlobeAmericas} />
    </span>
    <span>{
      languageLocalizedRecord[language]
    }</span>
  </>

  return <AdvancedSelect
    title={t('chooseLanguage')}
    onSelect={(value) => {
      dispatch(setLanguage(value))
      i18n.changeLanguage(value)

      if (authorized) {
        updatePreferences({
          language: value,
        })
          .then(({ data, status, struct, }) => {
            if (status === 200 && struct === 'Preferences') {
              dispatch(
                setPreferences(data as any),
              )
            }
          })
          .catch(console.error)
      }
    }}
    options={
      supportedLanguages
        .map(key => ({
          key,
          value: key,
          text: languageLocalizedRecord[key],
          icon: `https://flagsapi.com/${languageToFlag[key]}/flat/64.png`, 
        }))
    }
    value={language}
  >
    { button
      ? <Button>{ children }</Button>
      : children
    }
  </AdvancedSelect>
}
