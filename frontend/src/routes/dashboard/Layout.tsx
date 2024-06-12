// Copyright © 2024 Navarrotech

import { sendProto } from '@/modules/axios'
import Button from '@/elements/Button'

export default function DashboardLayout() {
    return <>
        <Button
            onClick={() => {
                const mockData = {
                    id: "foopy noop noop",
                    language: "en",
                    owner_id: "-11111111111",
                }

                sendProto('/test', "Preferences", mockData).then(res => console.log(res?.data))
            }}
        >Click to test</Button>
    </>
}
