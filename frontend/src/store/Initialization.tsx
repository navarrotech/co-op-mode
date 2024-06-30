// Copyright © 2024 Navarrotech

import { useEffect, type ReactNode } from "react"

// Redux
import { dispatch, useSelector } from "@/store"
import { finishInit, setUser } from "@/modules/auth/reducer"

// Components
import { LoaderLayout } from "@/common/Loader"
import { check } from "@/modules/generated/routes"

type Props = {
    children: ReactNode
}

export default function Initialization({ children }: Props){
    const isLoading = useSelector(state => state.user.loading)

    useEffect(() => {
        check()
            .then(({ data }) => {
                if (data?.user) {
                    dispatch(
                        setUser(data.user)
                    )
                }
            })
            .catch(console.error)
            .finally(() => {
                dispatch(
                    finishInit()
                )
            })
    }, [])

    if (isLoading){
        return <LoaderLayout />
    }

    return children
}
