import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { ActionUsersTypes, followAC, initialStateType, setCurrentPageAC, setUsersAC, unFollowAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import Preloader from '../common/preloader/Preloader';
import Users from './Users';


type PropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (pagesNamber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanget = (pagesNamber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pagesNamber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNamber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} onPageChanget={this.onPageChanget}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow} />
        </>
    }

}

const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);