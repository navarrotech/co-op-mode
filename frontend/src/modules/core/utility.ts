// Copyright © 2024 Navarrotech

import type { Theme } from './types'

export function applyTheme(theme: Theme) {
  console.log('Applying theme', theme)
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-system')
  if (theme === 'system'){
    return
  }
  document.body.classList.add(`theme-${theme}`)
}
