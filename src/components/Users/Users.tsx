import React from 'react';
import Axios from 'axios';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/unnamed.png';

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
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanget = (pagesNamber: number) => {
        this.props.setCurrentPage(pagesNamber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNamber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        const pageCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=1; i<= pageCount; i++){
            pages.push(i )
        }

        return <div>
            <div className={s.users}>
               {pages.map(p => {
                   return <span className={this.props.currentPage === p ? s.selectedPage: ''}
                                onClick={() => {this.onPageChanget(p)}}>{p}</span>
               })}
            </div>
            {
                this.props.usersPage.users.map(u => <div key={u.id} className={s.item}>
                    <div className={s.block1}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar} />
                        </div>
                        <div>
                            {u.isFollow
                                ? <button className={s.button} onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                                : <button className={s.button} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.messageBlock}>
                        <div className={s.block2}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>

                        <div className={s.block3}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div >
    }
}

export default Users;
