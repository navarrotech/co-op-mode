// Copyright © 2024 Navarrotech
import { useEffect } from "react"

// UI
import { Outlet, useNavigate } from "react-router"
import { LoaderLayout } from "@/common/Loader"

// Actions
import { useSelector } from "@/store"
import Topbar from "@/common/Topbar"
import urls from "../urls"

export function AuthorizedOutlet() {
    const authorized = useSelector(state => state.user.authorized)
    const navigate = useNavigate()

    useEffect(() => {
        if (!authorized) {
            console.log('Unauthorized, redirecting to login')
            navigate(urls.welcome)
            return
        }
    }, [ authorized ])

    if (!authorized){
        return <LoaderLayout />
    }

    return <div>
        <Topbar />
        <Outlet />
    </div>
}
