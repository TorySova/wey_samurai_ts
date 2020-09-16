import React from 'react';
import { initialStateType } from '../../redux/usersReducer';
import s from './Users.module.css'

type PropsType = {
    usersPage: initialStateType
    follow: (usersId: number) => void
    unFollow: (usersId: number) => void
}

const Users = (props: PropsType) => {
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id} className={s.item}>
                <div className={s.block1}>
                    <div>
                        <img src={u.avatar} className={s.avatar} />
                    </div>
                    <div>
                        {u.isFollow
                            ? <button className={s.button} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={s.messageBlock}>
                    <div className={s.block2}>
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </div>

                    <div className={s.block3}>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div >
}

export default Users;