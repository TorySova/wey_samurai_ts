import { profileAPI } from './../api/api';
import { ProfileType } from './../components/Profile/Profile';
import { ActionDialogsTypes } from './dialogsReducer';
import { ProfilePageType } from './store';

type initialStateType = {
    posts: {
        post: string
        id: number
        likeCounter: number
    }[]
    profile: null
    status: string
}

const initialState: initialStateType = {
    posts: [
        { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
        { post: "Today I'm happy", id: 2, likeCounter: 18 },
        { post: "Welcome", id: 3, likeCounter: 10 },
    ],
    profile: null,
    status: "---"
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state,
                posts: [ {id: new Date().getTime(), post: action.newPostText, likeCounter:0}, ...state.posts]
            }
        }
        case "SET-USER-PROFILE": {
            return { ...state, profile: action.profile }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
    }

    return state
}
export type ActionTypes = ActionDialogsTypes | ActionProfileTypes

export type ActionProfileTypes = ReturnType<typeof addPostAC> |
     ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setStatus(res.data));
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatus(status))
                };
            })
    }
}

