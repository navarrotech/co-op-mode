// Copyright © 2024 Navarrotech

// React.js
import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Iconography
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

// Redux
import { useSelector } from '@/store'

// Components
// import Dropdown from '../../elements/Dropdown'

export function Topbar() {
  const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(false)
  const user = useSelector(state => state.user.current)
  const { t } = useTranslation()

  if (!user) {
    return <></>
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src="/logo.png" width="28" height="28" alt="Navarrotech" />
          <h1 className="title is-5 ml-3">{ t('brand_name') }</h1>
        </div>
        <div
          role="button"
          className={'navbar-burger' + (showMobileMenu ? ' is-active' : '')}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={'navbar-menu' + (showMobileMenu ? ' is-active' : '')}>
        <div className="navbar-start">
          <hr className="navbar-divider is-hidden-desktop" />
          {/* <NavLink
            to="/logout"
            className="navbar-item is-hidden-desktop"
            onClick={() => setShowMobileMenu(false)}
          >Logout</NavLink> */}
        </div>

        <div className="navbar-end is-hidden-touch">
          <div className="navbar-item">
            {/* <Dropdown
              isTriggerRounded
              className="is-right"
              trigger={<div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>}
            >
              <NavLink to="/account" className="dropdown-item">Account (Coming soon)</NavLink>
              <hr className="dropdown-divider" />
              <NavLink to="/logout" className="dropdown-item">Logout</NavLink>
            </Dropdown> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
