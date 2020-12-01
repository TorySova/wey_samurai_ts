import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import {
    acceptFollow, initialStateType,
    setCurrentPage, setUsers,
    acceptUnFollow, setTotalUsersCount,
    toggleIsFetching, toggleIsFollowingProgress,
    requestUsers
} from '../../redux/usersReducer';
import s from './Users.module.css'
import Preloader from '../common/preloader/Preloader';
import Users from './Users';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUsers, getUsersTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';


type PropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    acceptFollow: (usersId: number) => void
    acceptUnFollow: (usersId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (pagesNamber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanget = (pagesNamber: number) => {

        this.props.requestUsers(pagesNamber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <div className={s.preloader}>
                <Preloader />
            </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanget={this.onPageChanget}
                usersPage={this.props.usersPage}
                acceptFollow={this.props.acceptFollow}
                acceptUnFollow={this.props.acceptUnFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// const mapStateToProps = (state: RootStateType) => {
//     return {
//         usersPage: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { acceptFollow, acceptUnFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, requestUsers })
)(UsersContainer);