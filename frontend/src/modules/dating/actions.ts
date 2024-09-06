// Copyright © 2024 Navarrotech

import { getState, dispatch } from '@/store'
import { likeProfile, passProfile } from './reducer'
import { matchDislike, matchLike } from '../generated/routes'

export async function likeCurrentProfile(is_super: boolean = false) {
  const state = getState()
  const profile = state.dating.forYou[0]

  if (!profile) {
    console.warn('No profile to like, unable to like')
    return
  }

  dispatch(
    likeProfile(profile),
  )

  matchLike({
    target_id: profile.id,
    is_super,
  })
}

export async function passCurrentProfile() {
  const state = getState()
  const profile = state.dating.forYou[0]

  if (!profile) {
    console.warn('No profile to pass, unable to pass')
    return
  }

  dispatch(
    passProfile(profile),
  )

  matchDislike({
    target_id: profile.id,
  })
}
