import { usersAPI } from './../api/api';
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
    followingInProgress: Array<any>
}

const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const userReducer = (state: initialStateType = initialState, action: ActionUsersTypes) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, isFollow: true }
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, isFollow: false }
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return { ...state, users: action.users }
        }
        case 'SET-CURENT-PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return { ...state, totalUsersCount: action.totalCount }
        }
        case 'TOGGLE-IS-FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.usersId]
                    : state.followingInProgress.filter(id => id !== action.usersId)
            }
        }
        default:
            return state;
    }
}

export type ActionUsersTypes = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleIsFollowingProgress>


export const follow = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}
export const unFollow = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}
export const setUsers = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, usersId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        usersId
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

// export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
//     return (dispatch: any) => {
//         dispatch(toggleIsFetching(true))
//         dispatch(setCurrentPage(currentPage));
//         usersAPI.getUsers(currentPage, pageSize).then(response => {
//                 dispatch(setUsers(response.data))
//                 dispatch(setTotalUsersCount(response.data.totalCount))
//                 dispatch(toggleIsFetching(false))
//             }
//         )
//     }
// }