// Copyright © 2024 Navarrotech

import { Client } from "plivo"

const PLIVO_AUTH_ID = "MAYMJLNTLMMTUWOWQYNG"
const PLIVO_TOKEN = "ODEyZDg4Y2FkYWNjNmYyNjkxZmY2ODQ2ZTg2ODll"
const PLIVO_APP_UUID = "7bc0d718-f5d6-491d-be5c-7a4e15a2461a"

const client = new Client(PLIVO_AUTH_ID, PLIVO_TOKEN)

async function main() {
  // This will send a verification text to the phone number
  const testResponse = await client.verify.initiate("12086859783", {})
  
  // Use the verification id that was returned from the initiate function
  // const testResponse = await client.verify.verify("81243d7f-d837-4557-9aef-ac702a1cb3e1", "9743")

  // const testResponse = await client.verify.deleteVerifiedCallerId("12086859783")

  console.log(testResponse)
  
  // @ts-ignore
  process.exit(0)
}

main()