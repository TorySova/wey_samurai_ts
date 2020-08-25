import React from 'react';
import s from './Header.module.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Header: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
    const titleHeader = props.location.pathname.substr(1)
    return <div className={s.header}>
        {titleHeader}
    </div>
}



export default withRouter(Header);
