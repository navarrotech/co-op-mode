// Copyright © 2024 Navarrotech

import { dispatch } from "@/store";
import { logout } from "./auth/reducer";

export async function reducerReset() {
  await dispatch(
    logout()
  )
}
