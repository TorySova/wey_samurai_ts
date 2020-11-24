import React from 'react';
import { sendMessageAC, ActionTypes } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state: RootStateType) => ({
    dialogsPage: state.dialogsPage,
    // auth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => ({
    sendMessage: (addMessage: string) => {
        dispatch(sendMessageAC(addMessage))
    }
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);