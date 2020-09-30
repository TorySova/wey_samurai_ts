import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Profile, { ProfileType } from './Profile';
import {setUserProfile} from '../../redux/profileReducer'

type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: null | ProfileType
}

class ProfileContainer extends React.Component<PropsType> { 

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return (
            <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
        )
    }
	
}

const mapStateToProps = (state: RootStateType) => {
    return{
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);