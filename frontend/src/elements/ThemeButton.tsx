// Copyright © 2024 Navarrotech

// Typescript
import type { Theme } from '@/modules/core/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

// Redux
import { dispatch, useSelector } from '@/store'
import { setTheme } from '@/modules/core/reducer'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faDesktop, faPalette } from '@fortawesome/free-solid-svg-icons'

// Components
import { Dropdown } from '@/elements/Dropdown'
import { useTranslation } from 'react-i18next'

export function ThemeButton() {
  const { t, } = useTranslation()
  const theme = useSelector(state => state.core.theme)

  const Trigger = <>
    <span className='icon'>
      <FontAwesomeIcon icon={faPalette} />
    </span>
    <span>{ t(`themes.${theme}`) }</span>
  </>

  function ChooseTheme(key: Theme, icon: IconDefinition){
    return <a
      id={'theme-' + key}
      key={key}
      className={`dropdown-item ${(theme === key ? ' is-active' : '')}`}
      onClick={() => dispatch(setTheme(key))}
    >
      <div className='icon-text'>
        <span className='icon'>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span>{ t(`themes.${key}`) }</span> 
      </div>
    </a>
  }

  return <Dropdown trigger={Trigger} className='is-right'>
    { ChooseTheme('light', faSun) }
    { ChooseTheme('dark', faMoon) }
    { ChooseTheme('system', faDesktop) }
  </Dropdown>
}
