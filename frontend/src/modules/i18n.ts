// Copyright © 2024 Navarrotech

import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const i18Instance = i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        ns: ['translation'],
        defaultNS: 'translation',
        lng: "en",
        fallbackLng: "en",
    })

export default i18Instance
