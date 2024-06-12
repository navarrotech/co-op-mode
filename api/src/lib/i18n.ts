// Copyright © 2024 Navarrotech

import { I18n } from "i18n"
import path from "path"

const i18n = new I18n({
    locales: ['en'],
    directory: path.join(__dirname, '../locales'),
    defaultLocale: 'en',
    header: 'accept-language',
})

export default i18n
