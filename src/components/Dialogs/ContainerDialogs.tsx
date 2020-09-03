import React from 'react';
import { ProfilePageType, DialogsPageType } from '../../redux/store';
import { sendMessageAC, changeNewMessageAC, ActionTypes } from '../../redux/dialogsReducer';
import { Store, CombinedState } from 'redux';
import Dialogs from './Dialogs';

type PropsType = {
    store: Store<CombinedState<{
        profilePage: ProfilePageType;
        dialogsPage: DialogsPageType;
    }>, ActionTypes>
}

const ContainerDialogs = (props: PropsType) => {
    const state = props.store.getState();
    const sendMessage = () => {
        if (state.dialogsPage.newMessageText.trim() !== "") {
            props.store.dispatch(sendMessageAC(state.dialogsPage.newMessageText))
        }
    }

    let newMessageHeandler = (text: string) => {
        props.store.dispatch(changeNewMessageAC(text))
    }

    return (
        <Dialogs sendMessage={sendMessage}
            newMessageHeandler={newMessageHeandler}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default ContainerDialogs;