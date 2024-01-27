//#region登录返回的信息
export interface LoginData {
    token: string
    user: User
}

export interface User {
    id: number
    username: string
    password: string
    email: string
    status: number
    phone: any
}

//endregion
