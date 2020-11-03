import { usersAPI } from './../api/api';
import { ProfileType } from './../components/Profile/Profile';
import { ActionDialogsTypes } from './dialogsReducer';
import { ProfilePageType } from './store';

type initialStateType = {
    posts: {
        post: string
        id: number
        likeCounter: number
    }[]
    newPostText: string
    profile: null
}

const initialState: initialStateType = {
    posts: [
        { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
        { post: "Today I'm happy", id: 2, likeCounter: 18 },
        { post: "Welcome", id: 3, likeCounter: 10 },
    ],
    newPostText: "",
    profile: null 
 
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            const newText = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCounter: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [newText, ...state.posts]
            // stateCopy.posts.push(newText);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case "CHANGE-NEW-TEXT": {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
        case "SET-USER-PROFILE": {
            return { ...state, profile: action.profile }
        }
    }

    return state
}
export type ActionTypes = ActionDialogsTypes | ActionProfileTypes

export type ActionProfileTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof changeNewTextAC> | ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return {
        type: "ADD-POST",
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const userProfile = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.userID(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

