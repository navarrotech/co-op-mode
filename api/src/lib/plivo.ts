// Copyright © 2024 Navarrotech

import { Client } from "plivo"
import { PLIVO_AUTH_ID, PLIVO_APP_UUID, PLIVO_TOKEN } from "@/env"

const Plivo = new Client(PLIVO_AUTH_ID || "Foopy", PLIVO_TOKEN || "Foopy", {
  app_uuid: PLIVO_APP_UUID,
})

export default Plivo
