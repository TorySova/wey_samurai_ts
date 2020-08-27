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
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (postText: string) => void
    subscribe: (observer: () => void) => void
    _renderTree: () => void
    getState: () => RootStateType
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { post: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
                { post: "Today I'm happy", id: 2, likeCounter: 18 },
                { post: "Welcome", id: 3, likeCounter: 10 },
            ],
            newPostText: '',
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
                { message: ":)", id: 2 },
                { message: "Wow", id: 3 },
                { message: "Ahahaha", id: 4 },
                { message: "I`m fine(:", id: 5 },
                { message: "(:", id: 6 },
              ],
            newMessageText: "",
        },
        sidebar: {}
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._renderTree();
    },
    addPost(postText: string) {
        const newText = {
            id: new Date().getTime(),
            post: postText,
            likeCounter: 0
        }
        this._state.profilePage.posts.push(newText);
        this._renderTree();
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    _renderTree() {
        console.log('state chenget');   
    },
    getState(){
        return this._state
    }
}

export default store;