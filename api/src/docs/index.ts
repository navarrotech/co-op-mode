//Copyright © 2024 Navarrotech.

// This file does not get imported by the rest of the API ecosystem.
// It is called specifically from package.json to auto-generate the documentation.
// Designed to be ran from inside of CCI.

// Meant only for development use, NOT FOR PRODUCTION

// Types
import type { SchemaObjectDescription } from 'yup'

// Routes
import routes from '@/functions'
import { ProtoBufs } from '@/lib/protobuf'

// Utility
import * as Sqrl from 'squirrelly'
import { minify } from 'html-minifier'

// Node.js
import path from 'path'
import fs from 'fs'

// Env
// import { LOGO_IMG_URL } from './env'

const templatePath = path.resolve(__dirname, 'template.squirrelly')
const outputPath = path.resolve(__dirname, '../../public')

async function generate(){
  const filename = require.resolve(templatePath)
  const template = fs.readFileSync(filename, 'utf8')

  const routesWithInfo = routes.map(route => ({
    ...route,
    // @ts-ignore
    id: route.path.replaceAll('/', '-'),
    method: (route.method || 'post').toUpperCase(),
    jsonSchema: JSON.stringify(
      filterDescribedSchema(
        route.validator?.describe()
      ),
      null,
      2
    ),
    responses: staticCodeAnalysis(route.handler, route.path)
  }))

  const htmlText = Sqrl.render(
    template,
    {
      routes: routesWithInfo,
      protobufs: ProtoBufs,
      // img: LOGO_IMG_URL,
      img: 'https://navarrotech.com/img/logo.png'
    }
  )

  const minifiedText = minify(htmlText, {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeTagWhitespace: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeEmptyAttributes: true
  })

  fs.mkdirSync(
    outputPath,
    { recursive: true }
  )
  fs.writeFileSync(
    path.resolve(outputPath, 'documentation.html'),
    minifiedText
  )
}

function filterDescribedSchema(schema: SchemaObjectDescription | undefined, firstSchema = true){
  const newSchema: Record<string, any> = {}

  if (schema === undefined){
    return newSchema
  }
  if (!firstSchema){
    if (schema.meta !== undefined){
      newSchema.meta = schema.meta
    }
    if (schema.label !== undefined){
      newSchema.label = schema.label
    }
    if (schema.oneOf.length){
      newSchema.oneOf = schema.oneOf
    }
    if (schema.notOneOf.length){
      newSchema.notOneOf = schema.notOneOf
    }
    if (schema.tests.length){
      schema.tests.forEach(test => {
        if (test.name === 'required'){
          newSchema.required = true
        }
        else if (test.name === 'min'){
          newSchema.minLength = test.params?.min
        }
        else if (test.name === 'max'){
          newSchema.maxLength = test.params?.max
        }
        else if (test.name === 'email'){
          newSchema.email = true
        }
      })
    }
    if (typeof schema.default === 'object' && schema.default !== null){
      // Remove all undefined values from defaults
      const newDefaults: any = {}
      let hasSome = false
      // @ts-ignore
      for (const key in schema.default){
        // @ts-ignore
        if (schema.default[key] !== undefined){
          // @ts-ignore
          newDefaults[key] = schema.default[key]
          hasSome = true
        }
      }
      if (hasSome){
        newSchema.default = newDefaults
      }
    }
  
    newSchema.optional = schema.optional
    newSchema.type = schema.type
    newSchema.nullable = schema.nullable
  }

  const fields = Object.entries(schema.fields || {})
  if (fields.length){
    newSchema.fields = {}
    for (const [ key, value ] of fields){
      // @ts-ignore
      newSchema.fields[key] = filterDescribedSchema(value, false)
    }
    if (firstSchema){
      return newSchema.fields
    }
  }

  return newSchema
}

type Analyzed = {
  code: number
  protobuf: string
  color: string
}

// This is so hacky lol
export function staticCodeAnalysis(func: Function, url: string): Analyzed[] {
  const stringified = func.toString()

  let results: Analyzed[] = []

  const hasStatusRegexp = new RegExp(/(response|res)\.(status|sendStatus)\(\d+\)/gmi)

  const lines = stringified.split('\n')
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index] || ''

    if (index + 1 >= lines.length) {
      break
    }

    const hasStatus = hasStatusRegexp.test(line)
    if (!hasStatus) {
      continue
    }

    const status = line.match(/(?:response|res)\.(?:status|sendStatus)\((\d+)\)/)?.[1]

    if (status === undefined) {
      console.warn('Found no status code in static code analysis of line for route: ', url, line)
      continue
    }

    let color = 'warning'
    if (status.startsWith('2')) {
      color = 'success'
    }
    else if (status.startsWith('4')) {
      color = 'danger'
    }
    else if (status.startsWith('5')) {
      color = 'link'
    }
  
    const nextLineIsSend = lines[index + 1]?.includes('response.sendProto')
    if (!nextLineIsSend) {
      results.push({
        code: parseInt(status),
        protobuf: '-- No Payload Response --',
        color
      })
    }

    const proto = lines[index + 1].match(/response\.sendProto\('(\w+)',/)?.[1]

    if (proto === undefined) {
      console.warn('Found no proto in static code analysis of line for route: ', url, '\n' + lines[index + 1].trim())
      continue
    }
    results.push({
      code: parseInt(status),
      protobuf: proto,
      color
    })
  }

  if (!results){
    console.warn('Found no responses in static code analysis for route: ', url)
  }

  // Filter duplicates if code and protobuf match
  results = results.filter((value, index, self) =>
    index === self.findIndex((t) =>
      (t.code === value.code && t.protobuf === value.protobuf)
    )
  )

  // Sort it by status code
  results.sort((a, b) => a.code - b.code)

  return results
}

generate()
