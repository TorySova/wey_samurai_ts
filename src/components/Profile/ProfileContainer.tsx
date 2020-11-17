import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import Profile, { ProfileType } from './Profile';
import { userProfile } from '../../redux/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type mapDispatchToPropsType = {
    userProfile: (userId: string) => void
}

type mapStateToPropsType = {
    profile: null | ProfileType
    // auth: boolean
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType
export type ProfilePropsType = RouteComponentProps<{ userId: string }> & OwnPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.userProfile(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    // auth: state.auth.isAuth
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { userProfile })
)(ProfileContainer)
