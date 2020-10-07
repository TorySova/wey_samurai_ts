import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { initialAuthStateType } from '../../redux/authReducer';

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Navbar = (props: PropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.link}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}> Profile </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}> News </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}> Music </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}> Settings </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}> Users </NavLink>
                </div>
            </div>
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </nav>
    )
}

export default Navbar;