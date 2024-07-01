// Copyright © 2024 Navarrotech

import { useSelector } from "@/store"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { isProfileComplete } from "./Builder"
import urls from "../urls"

export function ProfileCompletionOutlet() {
  const user = useSelector(state => state.user.current)
  const datingProfile = useSelector(state => state.dating.profile)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || !datingProfile) {
      console.log("Redirecting to welcome: There is no user or dating profile data")
      navigate(urls.welcome)
      return
    }
    if (!isProfileComplete(user!, datingProfile!)) {
      navigate(urls.buildProfile)
    }
  }, [ user, datingProfile ])

  return <Outlet />
} 

