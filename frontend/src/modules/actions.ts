// Copyright © 2024 Navarrotech

import { dispatch } from '@/store'
import { logout } from './auth/reducer'
import { stopGateway } from './gateway'

export async function shutdown() {
  await dispatch(
    logout()
  )

  await stopGateway()
}
