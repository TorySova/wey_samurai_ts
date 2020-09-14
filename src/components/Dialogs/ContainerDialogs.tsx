import React from 'react';
import { sendMessageAC, changeNewMessageAC, ActionTypes } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        newMessageHeandler: (text: string) => {
            dispatch(changeNewMessageAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ContainerDialogs;