// Copyright © 2024 Navarrotech

export type ApiResponse<T = any> = {
    code: number
    message: string
    success: boolean
    data?: T
}
