//Copyright © 2024 Navarrotech.

import defaultLanguageJson from '../locales/en.json'

export const defaultLanguage = 'en' as const

export const supportedLanguages = [
  'en', 'es', 'fr', 'ja'
  // "en", "zh", "es", "ar", "hi", "fr", "ru", "pt", "de", "ja", "ko", "vi", "it", "tr", "pl", "uk", 
  // "nl", "th", "sv", "da", "fi", "no", "he", "el", "hu", "cs", "ro", "bg", "sk", "lt", "lv", "et",
  // "hr", "sl", "sr", "mk", "bs", "mt", "is", "ga", "cy", "be", "hy", "ka", "az", "eu", "ca", "gl", 
  // "sq", "mn", "ur", "fa", "ta", "te", "ml", "kn", "mr", "gu", "pa", "bn", "my", "km", "lo", "si"
] as const

export type SupportedLanguages = typeof supportedLanguages[number]

export {
  defaultLanguageJson
}
