// Copyright © 2024 Navarrotech

// Typescript
import { IFormInvalid } from "@/lib/generated/schema"
import type { Request, Response } from "@/types"

// Constants
import { defaultLanguage, type SupportedLanguages } from "@/lib/language"

// Utility
import { languageValidator } from "@/lib/validators"
import { AnyObjectSchema, ValidationError } from "yup"
import { startCase } from "lodash"

type SuccessObject = {
    body: Record<string, any>
    query: Record<string, any>
}

const languageSchema = languageValidator()

type ValidationErrorTypes = "max" | "min" | "typeError" | "optionality"

export default async function validateMiddleware(
    request: Request,
    response: Response,
    validator: AnyObjectSchema,
): Promise<null | SuccessObject> {
    let validatedBody: Record<string, any> = {}
    if (validator) {
        try {
            validatedBody = await validator.validate(
                { body: request.body, query: request.query, },
                { abortEarly: false, stripUnknown: true, disableStackTrace: true }
            )
        } catch (err: any) {
            if (err instanceof ValidationError) {
                const validationError = err as ValidationError

                const payloads: IFormInvalid[] = []
                for (const error of validationError.inner) {
                    const key = (error.path?.replace(/((body)|(query))\./gi, '')) ?? ""

                    let value: string = error.params.originalValue || error.value
                    let message = error.message // <-- Default to unlocalized message

                    const type = error.type as ValidationErrorTypes
                    const what = startCase(key)

                    // If the reason for the error is a bad password
                    if (key.includes('password')) {
                        // You can never be too secure!
                        value = ""
                        message = request.__("validator_password")
                    }
                    // If the error is because it was too long
                    else if (type === "max") {
                        const length = error.params.max as string
                        message = request.__("validator_long", { what, length })
                    }
                    // If the error is because it was too short
                    else if (type === "min") {
                        const length = error.params.min as string
                        message = request.__("validator_short", { what, length })
                    }
                    else if (type === "typeError") {
                        const type = error.params.type as string
                        message = request.__("validator_type", { what, type })
                    }
                    else if (type === "optionality") {
                        message = request.__("validator_required", { what })
                    }
                    else {
                        console.error("!!!! Unhandled error type, sending unlocalized error message", validationError)
                    }

                    payloads.push({ key, value, message })
                }

                response.status(400)
                response.sendProto("FormsInvalid", { payloads })
                
                return null
            }

            console.log(err)
            response.status(500)
            response.sendProto("ServerError", {
                message: request.__("generic_error"),
            })

            return null
        }
    }

    let language = request.headers['accept-language'] || defaultLanguage
    try {
        languageSchema.validateSync(language)
    } catch (error) {
        console.error(error)
        language = defaultLanguage
    }

    request.language = language as SupportedLanguages

    return validatedBody as SuccessObject
}