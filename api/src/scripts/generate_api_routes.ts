// Copyright © 2024 Navarrotech

import fs from "fs"
import path from "path"

// This will auto generate the api routes TS for the frontend

let output = `
// Copyright © ${new Date().getFullYear()} Navarrotech

////////////////////////////////////////////
// !! AUTO GENERATED FILE, DO NOT EDIT !! //
////////////////////////////////////////////

// To manage this file, investigate the api/scripts/generate_api_routes.ts file

import { sendProto } from "@/modules/api"
`

import routes from "../functions"

const routeNames = {}
const typeNames = []
const functionNames = []

for (const { handler, path, method = "post", inboundStruct, validator } of routes) {

    // Check for duplicate function names, ensures consistency and code discipline
    const funcName = handler.name
    if (routeNames[funcName]) {
        throw new Error(`Duplicate route function name: ${funcName} (${path})`)
    }
    if (funcName === "test") {
        continue
    }
    routeNames[funcName] = true

    if (inboundStruct === undefined) {
        throw new Error(`Route ${path} has undefined inboundStruct`)
    }

    // Slight naming convention tweaking
    let frontendFuncName = funcName
    if (frontendFuncName.endsWith("Handler")) {
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

            if (type === "array"){
                type = "string[]"
            }
            if (type === "date"){
                type = "string"
            }

            output += `\t${key}${isOptional ? '?' : ''}: ${type}\n`
        }

        output += `}`
    }

    let methodStr = method.toUpperCase()
    if (methodStr === "ALL") {
        methodStr = "POST"
    }

    if (methodStr === "USE") {
        throw new Error(`Route ${path} has method "use" which is not supported in the frontend`)
    }

    output += `
export function ${frontendFuncName}(${
    // Function parameters
    inboundStruct !== null ? `data: ${typeName}` : ''
}) {
    return ${
        // Function body
        inboundStruct === null
            ? `sendProto("${path}", "Blank", { i: 0 }, "${methodStr}")`
            : `sendProto("${path}", "${inboundStruct}", data as any, "${methodStr}")`
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

export default Routes
`

const outputDir = path.join(__dirname, "../../../frontend/src/modules/generated")

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
        "routes.ts"
    ),
    output
)
