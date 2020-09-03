import { ActionDialogsTypes } from './dialogsReducer';
import { ProfilePageType } from './store';

type initialStateType = {
    posts: {
        post: string;
        id: number;
        likeCounter: number;
    }[];
    newPostText: string;
}

const initialState: initialStateType = {
    posts: [
        { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
        { post: "Today I'm happy", id: 2, likeCounter: 18 },
        { post: "Welcome", id: 3, likeCounter: 10 },
    ],
    newPostText: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    // const {state, action} = props
    if(action.type === "ADD-POST"){
        const newText = {
            id: new Date().getTime(),
            post: action.postText,
            likeCounter: 0
        }
        state.posts.push(newText);
        state.newPostText = "";
    } else if (action.type === "CHANGE-NEW-TEXT"){
        state.newPostText = action.newText;
    }

    return state
}
export type ActionTypes = ActionDialogsTypes | ActionProfileTypes

export type ActionProfileTypes = ReturnType<typeof addPostAC> |
                            ReturnType<typeof changeNewTextAC>

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}