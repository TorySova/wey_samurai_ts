import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Profile, { ProfileType } from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

type mapStateToPropsType = {
    profile: null | ProfileType
    status: string
    autorizedUserId: string 
    auth: boolean
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType
export type ProfilePropsType = RouteComponentProps<{ userId: string }> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    auth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
)(ProfileContainer)
