// Copyright © 2024 Navarrotech

// Core
import { NavLink, useLocation } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'

// Typescript
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faUser,
  faHeart,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCircleUser as faCircleUserRegular,
  faHeart as faHeartRegular,
} from '@fortawesome/free-regular-svg-icons'

import MessageRegular from '@/svg/messagesRegular.svg?react'
import MessageSolid from '@/svg/messagesSolid.svg?react'

// Misc
import { urls } from '../urls'
import styles from './Navigation.module.sass'

const fasSize: SizeProp = 'xl'

export function BottomBar() {
  const location = useLocation()

  let bottomLeftPosition = '0%'
  if (location.pathname.startsWith(urls.messages)) {
    bottomLeftPosition = '0%'

  }
  else if (location.pathname.startsWith(urls.matching)) {
    bottomLeftPosition = ((1/3) * 100) + '%'

  }
  else if (location.pathname.startsWith(urls.profile)) {
    bottomLeftPosition = ((2/3) * 100) + '%'
  }
  
  return <div className={styles.BottomBar}>
    <div
      className={styles.bottomHighlighter}
      style={{
        left: bottomLeftPosition,
      }}
    />
    <NavLink
      to={urls.messages}
      className={({ isActive, }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}
    >
      <div className={styles.iconBox}>
        <MessageSolid className={'custom-icon is-large ' + styles.solid} />
        <MessageRegular className={'custom-icon is-large ' + styles.regular} />
      </div>
      {/* <span>{ t('navigation_messages') }</span> */}
    </NavLink>
    <NavLink
      to={urls.matching}
      className={({ isActive, }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}
    >
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faHeart} size={fasSize} className={styles.solid} />
        <FontAwesomeIcon icon={faHeartRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={fasSize}
          className={`${styles.cover} ${styles.coverHeart}`}
        />
      </div>
      {/* <span>{ t('navigation_matching') }</span> */}
    </NavLink>
    {/* TODO: After MVP */}
    {/* <NavLink
      to={urls.discover}
      className={({ isActive, }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}
    >
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faMapRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faMap} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_discover') }</span>
    </NavLink> */}
    {/* <NavLink
      to={urls.likes}
      className={({ isActive, }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}
    >
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faStarRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faStar} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_likes') }</span>
    </NavLink> */}
    <NavLink
      to={urls.profile}
      className={({ isActive, }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}
    >
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faCircleUser} size={fasSize} className={styles.solid} />
        <FontAwesomeIcon icon={faCircleUserRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faUser} size={fasSize} className={styles.cover} />
      </div>
      {/* <span>{ t('navigation_profile') }</span> */}
    </NavLink>
  </div>
}
