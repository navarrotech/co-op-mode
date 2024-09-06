// Copyright © 2024 Navarrotech

import type { Theme } from './types'

export function applyTheme(theme: Theme) {
  document.body.classList.remove(
    'theme-light',
    'theme-dark',
    'theme-system',
  )
  if (theme === 'system'){
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    console.log(`Applying system theme (${theme})`)
  }
  else {
    console.log('Applying theme', theme)
  }
  document.body.classList.add(`theme-${theme}`)
}
