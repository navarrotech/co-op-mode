// Copyright © 2024 Navarrotech

import { sendProto } from '@/modules/api'
import Button from '@/elements/Button'

export default function DashboardLayout() {
    return <>
        <Button
            onClick={() => {
                const mockData = {
                    id: "foopyfoopy",
                    language: "en",
                    // owner_id: "foopyfoopy",
                }

                sendProto('/test', "Preferences", mockData).then(res => console.log(res?.data))
            }}
        >Click to test</Button>
    </>
}
