//Copyright © 2024 Navarrotech.

// Typescript
import type { Route } from '@/types'

const route: Route = {
  method: 'get',
  path: '/test',
  // validator,
  // inboundStruct: "Preferences",
  inboundStruct: null,
  handler: async function testHandler(request, response) {
    console.log(request.body)
    console.log('got test request')

    // const mockData: preferences = {
    //     id: "-1",
    //     owner_id: "-1",
    //     language: "en",
    // }

    request.session.user = {
      id: '-1',
      phone: '+1234567890',
      first_name: 'Test',
      last_name: 'User',
      email: 'Foopy?',
      created_at: new Date(),
      updated_at: new Date()
    }
    request.session.authorized = false
    await request.session.saveAsync()

    response.status(200)
    response.send('Hello World')

    // response.sendProto("Preferences", mockData)
  }
}

export default route
