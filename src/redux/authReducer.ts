import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';
export type initialAuthStateType = {
    email: string | null
    id: string
    login: string | null
    isAuth: boolean
}

const initialState: initialAuthStateType = {
    email: null,
    id: '',
    login: null,
    isAuth: false
}

type loginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const authReducer = (state: initialAuthStateType = initialState, action: ActionAuthTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export type ActionAuthTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: string, login: null | string, email: null | string, isAuth: boolean = false) => {
    return {
        type: "SET-USER-DATA",
        payload: {id, login, email, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: any) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        });
}

export const login = ({email, password, rememberMe}: loginDataType) => (dispatch: any) => {   
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        });
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData('', null, null, false))
            }
        });
}

