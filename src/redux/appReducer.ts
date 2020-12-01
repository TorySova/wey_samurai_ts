import { getAuthUserData } from "./authReducer";

export type initialAppStateType = {
    initialized: boolean
}

let initialState: initialAppStateType = {
    initialized: false
}

export const appReducer = (state: initialAppStateType = initialState, action: ActionAppType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export type ActionAppType = ReturnType<typeof setInitializedAC>

export const setInitializedAC = () => ({
    type: "SET-INITIALIZED",
} as const)

export const initializeApp = () => async (dispatch: any) => {
   await dispatch(getAuthUserData())
   debugger

   dispatch(setInitializedAC())
    // debugger
    // Promise.all([promise])
    //     .then(() => {
    //         debu
          
    //     })
}