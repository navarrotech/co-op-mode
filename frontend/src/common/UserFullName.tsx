// Copyright © 2024 Navarrotech

import { useSelector } from '@/store'

export function UserFullName() {
  const user = useSelector((state) => state.user.current)
  return <p>{ user?.first_name || '' } { user?.last_name || '' }</p>
}
