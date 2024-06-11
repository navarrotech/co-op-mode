// Copyright © 2024 Navarrotech

// React.js
import { useState } from "react"

// Components
import ThemeButton from "./ThemeButton"
import UserMenu from "./UserMenu"

export default function Topbar() {
    const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/dashboard">
                    <img src="/libertea.png" width="28" height="28" alt="Navarrotech" />
                    <h1 className="title is-5 ml-3">Libertea</h1>
                </a>
                <div
                    role="button"
                    className={"navbar-burger" + (showMobileMenu ? " is-active" : "")}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div className={"navbar-menu" + (showMobileMenu ? " is-active" : "")}>
                <div className="navbar-start">
                    {/* <NavLink
                        className={({ isActive }) => `navbar-item ${isActive ? 'is-selected' : ''}`}
                        to="/dashboard/today"
                        onClick={() => setShowMobileMenu(false)}
                    >
                        Today
                    </NavLink>
                    <hr className="navbar-divider is-hidden-desktop" />
                    <NavLink
                        to="/account"
                        className="navbar-item is-hidden-desktop"
                        onClick={() => setShowMobileMenu(false)}
                    >Account (Coming soon)</NavLink>
                    <NavLink
                        to="/logout"
                        className="navbar-item is-hidden-desktop"
                        onClick={() => setShowMobileMenu(false)}
                    >Logout</NavLink> */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <ThemeButton />
                    </div>
                    <div className="navbar-item is-hidden-touch pl-0">
                        <UserMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}
