// Copyright © 2024 Navarrotech

// Typescript
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

// React.js
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Font Awesome 6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faHeart, faStar, faMap } from '@fortawesome/free-solid-svg-icons'
import {
  faUser as faUserRegular,
  faMessage as faMessageRegular,
  faHeart as faHeartRegular,
  faStar as faStarRegular,
  faMap as faMapRegular
} from '@fortawesome/free-regular-svg-icons'

// Misc
import urls from '../urls'
import styles from './Navigation.module.sass'

const fasSize: SizeProp = 'xl'

export default function BottomBar() {
  const { t } = useTranslation()

  return <div className={styles.BottomBar}>
    <NavLink to={urls.matching} className={({ isActive }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faHeartRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faHeart} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_matching') }</span>
    </NavLink>
    <NavLink to={urls.discover} className={({ isActive }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faMapRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faMap} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_discover') }</span>
    </NavLink>
    <NavLink to={urls.likes} className={({ isActive }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faStarRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faStar} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_likes') }</span>
    </NavLink>
    <NavLink to={urls.messages} className={({ isActive }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faMessageRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faMessage} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_messages') }</span>
    </NavLink>
    <NavLink to={urls.profile} className={({ isActive }) => styles.bottomItem + ' ' + (isActive ? styles.isActive : '')}>
      <div className={styles.iconBox}>
        <FontAwesomeIcon icon={faUserRegular} size={fasSize} className={styles.regular} />
        <FontAwesomeIcon icon={faUser} size={fasSize} className={styles.solid} />
      </div>
      <span>{ t('navigation_profile') }</span>
    </NavLink>
  </div>
}
