// Copyright © 2024 Navarrotech

import { API } from '@/common/Axios'
import Button from '@/elements/Button'

export default function DashboardLayout() {
    return <>
        <Button
            onClick={() => {
                API.post('/test').then(res => {
                    console.log(res)
                })
            }}
        >Click to test</Button>
    </>
}
