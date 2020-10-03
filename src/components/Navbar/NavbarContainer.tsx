import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Navbar from './Navbar';
import { setAuthUserData, initialAuthStateType } from '../../redux/authReducer'

type PropsType = {
    setAuthUserData: (data: initialAuthStateType) => void
    isAuth: boolean
    login: string | null
}

class NavbarContainer extends React.Component<PropsType> {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            });
    }
    render() {
        return (
            <Navbar isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setAuthUserData })(NavbarContainer);