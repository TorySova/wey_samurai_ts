import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/unnamed.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanget: (pagesNamber: number) => void
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
}

const Users = (props: PropsType) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={s.users}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={() => { props.onPageChanget(p) }}>{p}</span>
            })}
        </div>
        {
            props.usersPage.users.map(u => <div key={u.id} className={s.item}>
                <div className={s.block1}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {u.isFollow
                            ? <button className={s.button} onClick={() => {
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3630c63c-1fb1-408e-b7bf-e8e014da7896"
                                    }
                                })
                                    .then(response => {
                                       if(response.data.resultCode === 0){
                                         props.unFollow(u.id)
                                       }
                                    });
                               
                            }}>Unfollow</button>
                            : <button className={s.button} onClick={() => {
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3630c63c-1fb1-408e-b7bf-e8e014da7896"
                                    }
                                })
                                    .then(response => {
                                       if(response.data.resultCode === 0){
                                            props.follow(u.id)
                                       }
                                    });
                                
                            }}>Follow</button>}
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

export default Users;
