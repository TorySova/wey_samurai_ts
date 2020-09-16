export type initialStateType = {
    users: {
        id: number;
        avatar: string;
        firstName: string;
        status: string;
        location: {
            city: string;
            country: string;
        };
        isFollow: boolean;
    }[]
}

const initialState: initialStateType = {
    users: [
        {
            id: 1,
            avatar: 'https://c7.hotpng.com/preview/118/687/577/emoji-happiness-emoticon-smiley-emoji-thumbnail.jpg',
            firstName: 'Dima',
            status: 'Hello Word!',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            },
            isFollow: true
        },
        {
            id: 2,
            avatar: 'https://c7.hotpng.com/preview/786/839/746/iphone-emoji-sticker-blushing-embarrassment-blushing-emoji.jpg',
            firstName: 'Nikc',
            status: 'I am happy',
            location: {
                city: 'Moscow',
                country: 'Russia'
            },
            isFollow: false
        },
        {
            id: 3,
            avatar: 'https://w7.pngwing.com/pngs/838/951/png-transparent-emoji-emoticon-iphone-sticker-smiley-travel-round-face-computer-wallpaper-smiley.png',
            firstName: 'Pit',
            status: 'Shit happens',
            location: {
                city: 'SPb',
                country: 'Russia'
            },
            isFollow: true
        },
    ]
}

export const userReducer = (state: initialStateType = initialState, action: ActionUsersTypes) => {
       
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return {...u, isFollow: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return {...u, isFollow: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


export const followAC = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}
export const unFollowAC = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}