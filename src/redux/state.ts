let renderTree = () => {
    console.log('hello');
    
}

export const subscribe = (observer: () => void) => {
    renderTree = observer;
}


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
    newPostText: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
            { post: "Today I'm happy", id: 2, likeCounter: 18 },
            { post: "Welcome", id: 3, likeCounter: 10 },
        ],
        newPostText: ''
    },
    dialogsPage: {
         dialogs: [
            { name: "Ed", id: 1 },
            { name: "Alina", id: 2 },
            { name: "Oksana", id: 3 },
            { name: "Sasha", id: 4 },
            { name: "Tanya", id: 5 },
          ],
          
        messages: [
            { message: "Hello", id: 1 },
            { message: "Wat`s up?", id: 2 },
            { message: "Wow", id: 3 },
            { message: "Ahahaha", id: 4 },
            { message: "I`m fine(:", id: 5 },
          ]
    },
    sidebar: {}
}

export const addPost = (postText: string) => {
    const newText = {
        id: new Date().getTime(),
        post: postText,
        likeCounter: 0
    }
    state.profilePage.posts.push(newText);
    renderTree();
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderTree();
}

export default state;