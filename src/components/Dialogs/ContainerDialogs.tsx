import React from 'react';
import { sendMessageAC, changeNewMessageAC, ActionTypes } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/store';

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType;
//         dialogsPage: DialogsPageType;
//     }>, ActionTypes>
// }

// const ContainerDialogs = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 const state = store.getState();
//                 const sendMessage = () => {
//                     if (state.dialogsPage.newMessageText.trim() !== "") {
//                         store.dispatch(sendMessageAC(state.dialogsPage.newMessageText))
//                     }
//                 }
//                 let newMessageHeandler = (text: string) => {
//                     store.dispatch(changeNewMessageAC(text))
//                 }
//                 return (
//                     <Dialogs sendMessage={sendMessage}
//                         newMessageHeandler={newMessageHeandler}
//                         dialogs={state.dialogsPage.dialogs}
//                         messages={state.dialogsPage.messages}
//                         newMessageText={state.dialogsPage.newMessageText} />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

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