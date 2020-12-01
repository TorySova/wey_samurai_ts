import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Navbar from './Navbar';
import { logout } from '../../redux/authReducer'

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class NavbarContainer extends React.Component<PropsType> {
   
    render() {
        return (
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { logout })(NavbarContainer);