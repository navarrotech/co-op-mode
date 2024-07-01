// Copyright © 2024 Navarrotech

import { useEffect, type ReactNode } from "react"

// Redux
import { dispatch, getState, useSelector } from "@/store"
import { finishInit, setDailyLimits, setMonthlyLimits, setPermanentLimits, setPreferences, setUser } from "@/modules/auth/reducer"

// Components
import { LoaderLayout } from "@/common/Loader"
import { check, sync } from "@/modules/generated/routes"
import { setMedia, setProfile } from "@/modules/dating/reducer"
import { setConversations } from "@/modules/messages/reducer"
import { NODE_ENV } from "@/env"

type Props = {
    children: ReactNode
}

export const init = () => check()
    .then(({ data }) => {
        if (data?.user) {
            dispatch(
                setUser(data.user)
            )
            return sync()
        }
        return null
    })
    .then((response) => {
        if (!response) {
            return
        }
        if (response.status === 200) {
            const {
                data: {
                    datingProfile,
                    limits: {
                        daily,
                        monthly,
                        permanent,
                    },
                    preferences,
                    user,
                    media=[],
                    conversations=[],
                }
            } = response

            dispatch( setUser(user) )
            dispatch( setDailyLimits(daily) )
            dispatch( setMonthlyLimits(monthly) )
            dispatch( setPermanentLimits(permanent) )
            dispatch( setProfile(datingProfile) )
            dispatch( setPreferences(preferences) )
            dispatch( setMedia(media) )
            dispatch( setConversations(conversations) )
        }
    })
    .catch(console.error)
    .finally(() => {
        dispatch(
            finishInit()
        )
        if (NODE_ENV === "development") {
            console.log(
                getState()
            )
        }
    })

export default function Initialization({ children }: Props){
    const isLoading = useSelector(state => state.user.loading)

    useEffect(() => {
        init()
    }, [])

    if (isLoading){
        return <LoaderLayout />
    }

    return children
}
