// Copyright © 2024 Navarrotech

// Typescript
import type { PathFunctionProps } from '@/types'

// Hooks
import { useLocation, useParams } from 'react-router'
import { useSelector } from '@/store'

export type SmartPath = string | ((location: PathFunctionProps) => string)

export function useSmartPath(path: SmartPath) {
  const user = useSelector(state => state.user.current)
  const location = useLocation()
  const params = useParams()

  const actualPath = typeof path === 'function'
    ? path({
      ...location,
      ...params,
      userId: user?.id || undefined,
    })
    : path

  return actualPath
}
