//Copyright © 2024 Navarrotech.

import fs from 'fs'
import path from 'path'

// This will auto generate the api routes TS for the frontend

let output = `
// Copyright © ${new Date().getFullYear()} Navarrotech

////////////////////////////////////////////
// !! AUTO GENERATED FILE, DO NOT EDIT !! //
////////////////////////////////////////////

// To manage this file, investigate the api/scripts/generate_api_routes.ts file

import type { ProtoBufsTypes } from "../protobuf/ProtoTypes"
import type { SupportedLanguages } from "../language"
import { sendProto } from "@/modules/api"

type APIHeaders = {
	'Content-Type': 'application/x-protobuf' | 'application/json'
	'X-Protobuf-Struct': keyof ProtoBufsTypes,
	'Language': SupportedLanguages
}

`

import routes from '../functions'
import { staticCodeAnalysis } from '@/docs'

const routeNames = {}
const typeNames = []
const functionNames = []

for (const { handler, path, method = 'post', inboundStruct, validator } of routes) {
  const routeReturnInfo = staticCodeAnalysis(handler, path)

  // Check for duplicate function names, ensures consistency and code discipline
  const funcName = handler.name
  if (routeNames[funcName]) {
    throw new Error(`Duplicate route function name: ${funcName} (${path})`)
  }
  if (funcName === 'test') {
    continue
  }
  routeNames[funcName] = true

  if (inboundStruct === undefined) {
    throw new Error(`Route ${path} has undefined inboundStruct`)
  }

  // Slight naming convention tweaking
  let frontendFuncName = funcName
  if (frontendFuncName.endsWith('Handler')) {
    frontendFuncName = frontendFuncName.slice(0, -7)
  }
  functionNames.push(frontendFuncName)

  const typeName = `I${frontendFuncName.slice(0, 1).toUpperCase()}${frontendFuncName.slice(1)}`

  if (validator) {
    typeNames.push(typeName)

    output += `\nexport type ${typeName} = {\n`

    // @ts-ignore
    const fields = validator.fields.body.fields
    for (const [ key, value ] of Object.entries(fields)) {
      // @ts-ignore
      let type = value.type

      // @ts-ignore
      const isOptional = value?.spec?.optional

      if (type === 'array'){
        type = 'string[]'
      }
      if (type === 'date'){
        type = 'string'
      }

      output += `\t${key}${isOptional ? '?' : ''}: ${type}\n`
    }

    output += '}'
  }

  let methodStr = method.toUpperCase()
  if (methodStr === 'ALL') {
    methodStr = 'POST'
  }

  if (methodStr === 'USE') {
    throw new Error(`Route ${path} has method "use" which is not supported in the frontend`)
  }

  const statusCodes = routeReturnInfo.map(i => i.code)
  const protobufs = routeReturnInfo.map(i => i.protobuf)

  const routeReturnType: string[] = routeReturnInfo.map(i => {
    if (i.protobuf === '-- No Payload Response --') {
      return undefined
    }
    return `status extends ${i.code} ? ProtoBufsTypes['I${ i.protobuf }'] :`
  })
    .filter(i => i !== undefined)

  routeReturnType.push('null')

  const foundStructs = protobufs.map(i => `'${i}'`).join(' | ')

  const typedResponseName = `Api${frontendFuncName.slice(0, 1).toUpperCase()}${frontendFuncName.slice(1)}Response`
  const typedResponse = `
type ${typedResponseName}<status extends ${statusCodes.join(' | ')} = any> = {
	status: status,
	data: ${routeReturnType.join('\n\t\t')}
	headers: APIHeaders
	struct: ${foundStructs.includes('-- No Payload Response --') ? 'null' : foundStructs}
}`

  output += `
${typedResponse}

export function ${frontendFuncName}(${
  // Function parameters
  inboundStruct !== null ? `data: ${typeName}` : ''
}): Promise<${typedResponseName}> {
    return ${
  // Function body
  inboundStruct === null
    ? `sendProto<${typedResponseName}>("${path}", "Blank", { i: 0 }, "${methodStr}")`
    : `sendProto<${typedResponseName}>("${path}", "${inboundStruct}", data as any, "${methodStr}")`
}
}
`
}

output += `\nexport type Types = {
    ${typeNames.map(i => `${i}: ${i}`).join(',\n\t')}
}

export const Routes = {
    ${functionNames.join(',\n\t')}
} as const

export type RouteNames = keyof typeof Routes
`

const outputDir = path.join(__dirname, '../../../frontend/src/modules/generated')

// Write to file
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(
    outputDir,
    { recursive: true }
  )

}
fs.writeFileSync(
  path.join(
    outputDir,
    'routes.ts'
  ),
  output
)
