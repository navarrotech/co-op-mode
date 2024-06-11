// Copyright © 2024 Navarrotech

// Typescript
import type { Route } from "navarrotech-express"

const route: Route = {
    method: "post",
    path: "/auth/logout",
    handler: async function loginHandler(request, response) {
        try{
            await request.session.destroyAsync()
        } catch(e){}
        response.sendStatus(200)
    }

}

export default route
