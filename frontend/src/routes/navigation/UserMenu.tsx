// Copyright © 2024 Navarrotech

// React.js
import { NavLink } from 'react-router-dom'

// Iconography
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// Utility
import { useKeycloak } from '@react-keycloak/web'

// Components
import Dropdown from '../../elements/Dropdown'
import Button from '@/elements/Button'

const Trigger = <Button>
  <div className="icon">
    <FontAwesomeIcon icon={faUser} />
  </div>
</Button>

export default function UserMenu(){
  const { keycloak } = useKeycloak()

  return <Dropdown
    className="is-right"
    trigger={Trigger}
  >
    <a className="dropdown-item" onClick={() => keycloak.accountManagement()}>My Account</a>
    <hr className="dropdown-divider" />
    <NavLink to="/logout" className="dropdown-item">Logout</NavLink>
  </Dropdown>
}
