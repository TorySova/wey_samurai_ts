export type initialAuthStateType = {
    email: null
    id: null
    login: null
    isAuth: boolean
}

const initialState: initialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialAuthStateType = initialState, action: ActionAuthTypes) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export type ActionAuthTypes = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: initialAuthStateType) => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}
