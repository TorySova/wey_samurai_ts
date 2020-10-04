import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { ActionUsersTypes, follow, initialStateType, setCurrentPage, setUsers, unFollow, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
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
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanget = (pagesNamber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pagesNamber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNamber}&count=${this.props.pageSize}`,
        {
            withCredentials: true
        })
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


export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);