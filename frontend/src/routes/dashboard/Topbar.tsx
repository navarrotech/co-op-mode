// Copyright © 2024 Navarrotech

// Core
import { useTranslation } from 'react-i18next'

// Typescript
import type { ReactNode } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  id?: string
  title?: string | ReactNode
  noLogo?: boolean
  icon?: IconDefinition
  onLogoClick?: () => void
  children?: ReactNode
}

export function Topbar(props: Props) {
  const {
    id,
    icon,
    noLogo = false,
    title,
    children = <></>,
    onLogoClick,
  } = props

  const { t, } = useTranslation()

  return <nav
    id={id}
    className='navbar'
    role='navigation'
    aria-label='main navigation'
  >
    <div className='navbar-brand'>
      <div className='navbar-item' onClick={onLogoClick}>
        { icon 
          ? <span className='icon'>
            <FontAwesomeIcon
              icon={icon}
              size='lg'
            />
          </span>
          : noLogo
            ? <></>
            : <img src='/logo.png' width='28' height='28' alt='Navarrotech' />
        }
        {
          !title
            ? <h1 className='title is-5 ml-3'>{ t('brand.name') }</h1>
            : typeof title === 'string'
              ? <h1 className='is-size-6 ml-3'>{ t(title) }</h1>
              : title
        }
      </div>
    </div>
    <div className='navbar-menu'>
      { children }
    </div>
  </nav>
}
