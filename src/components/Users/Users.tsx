import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/unnamed.png';
import { NavLink } from 'react-router-dom';

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
                            ? <button className={s.button} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>}
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
