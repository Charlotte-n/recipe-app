import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../apis/types/mine'

interface initialState {
    userInfo: User
    token: string
}
const initialState: initialState = {
    userInfo: {} as User,
    token: '',
}

export const LoginRegisterSlice = createSlice({
    name: 'LoginRegister',
    initialState,
    reducers: {
        changeUserInfoAction(state, { payload }) {
            state.userInfo = payload
        },
        changeTokenAction(state, { payload }) {
            state.token = payload
        },
        clearUserInfoAction(state) {
            state.token = ''
            state.userInfo = {} as User
        },
    },
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { changeUserInfoAction, changeTokenAction, clearUserInfoAction } =
    LoginRegisterSlice.actions

export default LoginRegisterSlice.reducer
