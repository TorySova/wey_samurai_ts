import { RootStateType } from './store';

export const getUsers = (state: RootStateType) => {
    return state.usersPage
}

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getUsersTotalCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}

