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
    acceptFollow: (usersId: number) => void
    acceptUnFollow: (usersId: number) => void
    followingInProgress: Array<any>  
}

const Users = (props: PropsType) => {   
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.users}>
            {pages.map((p, index) => {             
                return <span key={index}className={props.currentPage === p? s.selectedPage : ''} 
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                               props.acceptUnFollow(u.id)          
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}  onClick={() => {
                                props.acceptFollow(u.id)                               
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
