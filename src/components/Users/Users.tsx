import Axios from 'axios';
import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css';
import userPhoto from '../../assets/images/unnamed.png'

type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
    setUsers: (users: any) => void
}

const Users = (props: PropsType) => {
    if (props.usersPage.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id} className={s.item}>
                <div className={s.block1}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar} />
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