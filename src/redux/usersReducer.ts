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
    }[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        }
        case 'SET-CURENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleIsFetchingAC>


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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}