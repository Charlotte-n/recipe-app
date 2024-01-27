import hyRequest from '../services'
import { LoginData } from './types/mine'
import { CommonResponseType } from './types'

enum URL {
    LOGINURL = '/api/user/login',
    CODEURL = '/api/user/getCode',
    VERIFYURL = '/api/user/register',
}

export interface LoginParamType {
    email: string
    password: string
}

/**
 * 登录
 * @param LoginParam
 * @constructor
 */
export const LoginApi = (LoginParam: LoginParamType) => {
    return hyRequest.post<CommonResponseType<LoginData>>({
        url: URL.LOGINURL,
        data: {
            email: LoginParam.email,
            password: LoginParam.password,
        },
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

/**
 * 获取验证码
 * @param email
 */
export const getCodeApi = (email: string) => {
    return hyRequest.get<CommonResponseType<string>>({
        url: URL.CODEURL,
        params: {
            email,
        },
    })
}

/**
 * 校验验证码
 * @param code
 */
export const verifyCodeApi = (code: string) => {
    return hyRequest.post({
        url: URL.VERIFYURL,
        data: {
            code,
        },
    })
}
