import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Profile, { ProfileType } from './Profile';
import {setUserProfile} from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router';

type PathParamsType = {
    userId: string
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type mapStateToPropsType = {
    profile: null | ProfileType
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> { 

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = '2'
        }
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
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

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);