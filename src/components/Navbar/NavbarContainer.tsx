import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Navbar from './Navbar';
import { initialAuthStateType, userLogin } from '../../redux/authReducer'

type PropsType = {
    isAuth: boolean
    login: string | null
    userLogin: () => void
}

class NavbarContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.userLogin()
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

export default connect(mapStateToProps, { userLogin })(NavbarContainer);