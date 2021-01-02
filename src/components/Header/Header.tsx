import React from 'react';
import s from './Header.module.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Header: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
    const a = props.location.pathname.substr(1)
    let titleHeader = a[0] + a.slice(1).split("/")[0];
    return <div className={s.header}>
        {titleHeader}
    </div>
}



export default withRouter(Header);
