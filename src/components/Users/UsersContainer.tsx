import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { ActionUsersTypes, followAC, initialStateType, setUsersAC, unFollowAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;