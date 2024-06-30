// Copyright © 2024 Navarrotech

import { dispatch, useSelector } from "@/store"
import { languageLocalizedRecord, languageToFlag, supportedLanguages } from "@/modules/language"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AdvancedSelect from "./AdvancedSelect"
import { setLanguage } from "@/modules/core/reducer"
import { useTranslation } from "react-i18next"

export default function LanguageChooser() {
  const language = useSelector(state => state.core.language)
  const { t, i18n } = useTranslation()
  
  return <AdvancedSelect
    title={t('choose_language')}
    onSelect={(value) => {
      dispatch(setLanguage(value))
      i18n.changeLanguage(value)
    }}
    options={
      supportedLanguages
        .map(key => ({
          key,
          value: key,
          text: languageLocalizedRecord[key],
          icon: `https://flagsapi.com/${languageToFlag[key]}/flat/64.png` 
        }))
    }
    value={language}
  >
    <span className="icon">
      <FontAwesomeIcon icon={faGlobeAmericas} />
    </span>
    <span>{ languageLocalizedRecord[language] }</span>
  </AdvancedSelect>
}
