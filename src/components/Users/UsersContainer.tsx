import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { ActionUsersTypes, followAC, initialStateType, setCurrentPageAC, setUsersAC, unFollowAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionUsersTypes) => void) => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsers: (users: initialStateType) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pagesNamber: number) => {
            dispatch(setCurrentPageAC(pagesNamber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;