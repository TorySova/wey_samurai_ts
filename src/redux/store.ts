import { appReducer, initialAppStateType } from './appReducer';
import { initialAuthStateType } from './authReducer';
import { ProfileType } from './../components/Profile/Profile';
import { initialStateType } from './usersReducer';
export type MessagesType = {
    message: string
    id: number
}
export type DialogsType = {
    name: string
    id: number
}
export type PostsType = {
    post: string
    id: number
    likeCounter: number
}
export type ProfilePageType = {
    
    posts: Array<PostsType>
    profile: null | ProfileType
    status: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogsPageType
    usersPage: initialStateType
    auth: initialAuthStateType
    app: initialAppStateType,
}

// export type StoreType = {
//     _state: RootStateType
//     subscribe: (observer: () => void) => void
//     _renderTree: () => void
//     getState: () => RootStateType
//     dispatch: (action: ActionTypes) => void
// }




// export const addPostAC = (postText: string) => {
//     return {
//         type: "ADD-POST",
//         postText: postText
//     } as const
// }

// export const changeNewTextAC = (newText: string) => {
//     return {
//         type: "CHANGE-NEW-TEXT",
//         newText: newText
//     } as const
// }

// export const sendMessageAC = (messageText: string) => {
//     return {
//         type: "SEND-MESSAGE",
//         messageText: messageText
//     } as const
// }

// export const changeNewMessageAC = (newMessage: string) => {
//     return {
//         type: "CHANGE-MESSAGE-TEXT",
//         newMessage: newMessage
//     } as const
// }

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
//                 { post: "Today I'm happy", id: 2, likeCounter: 18 },
//                 { post: "Welcome", id: 3, likeCounter: 10 },
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//              dialogs: [
//                 { name: "Ed", id: 1 },
//                 { name: "Alina", id: 2 },
//                 { name: "Oksana", id: 3 },
//                 { name: "Sasha", id: 4 },
//                 { name: "Tanya", id: 5 },
//               ],
              
//             messages: [
//                 { message: "Hello", id: 1 },
//                 { message: ":)", id: 2 },
//                 { message: "Wow", id: 3 },
//                 { message: "Ahahaha", id: 4 },
//                 { message: "I`m fine(:", id: 5 },
//                 { message: "(:", id: 6 },
//               ],
//             newMessageText: "",
//         }
//     },
//     subscribe(observer) {
//         this._renderTree = observer;
//     },
//     _renderTree() {
//         console.log('state chenget');   
//     },
//     getState(){
//         return this._state
//     },
//     dispatch(action: ActionTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialodsReducer(this._state.dialogsPage, action);
//         this._renderTree();
        // if(action.type === "ADD-POST"){
        //     const newText = {
        //         id: new Date().getTime(),
        //         post: action.postText,
        //         likeCounter: 0
        //     }
        //     this._state.profilePage.posts.push(newText);
        //     this._state.profilePage.newPostText = "";
        //     this._renderTree();
        // } else if (action.type === "CHANGE-NEW-TEXT"){
        //     this._state.profilePage.newPostText = action.newText;
        //     this._renderTree();
        // } else if(action.type === "SEND-MESSAGE"){
        //     const newMessage = {
        //         id: new Date().getTime(),
        //         message: action.messageText
        //     }
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = "";
        //     this._renderTree();
        // } else if (action.type === "CHANGE-MESSAGE-TEXT"){
        //     this._state.dialogsPage.newMessageText = action.newMessage;
        //     this._renderTree();
        // }
//     }
// }

// export default store;