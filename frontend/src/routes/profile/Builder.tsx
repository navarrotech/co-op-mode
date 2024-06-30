// Copyright © 2024 Navarrotech

// React.js
import { useState, useEffect } from 'react'

// Redux
import { useSelector, dispatch } from '@/store'

import { updateAccount } from '@/modules/generated/routes'

export default function ProfileBuilder() {
  const user = useSelector(state => state.user.current)

  return <></>
}
