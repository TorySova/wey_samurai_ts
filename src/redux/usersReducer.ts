export type initialStateType = {
    users: {
        id: number;
        photos: {
            small: any
            lagre: any
        };
        name: string;
        status: string;
        location: {
            city: string;
            country: string;
        };
        isFollow: boolean;
    }[]
}

const initialState: initialStateType = {
    users: []
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