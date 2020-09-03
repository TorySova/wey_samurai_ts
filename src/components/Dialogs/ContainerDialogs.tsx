import React from 'react';
import { sendMessageAC, changeNewMessageAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType;
//         dialogsPage: DialogsPageType;
//     }>, ActionTypes>
// }

const ContainerDialogs = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();
                const sendMessage = () => {
                    if (state.dialogsPage.newMessageText.trim() !== "") {
                        store.dispatch(sendMessageAC(state.dialogsPage.newMessageText))
                    }
                }

                let newMessageHeandler = (text: string) => {
                    store.dispatch(changeNewMessageAC(text))
                }

                return (
                    <Dialogs sendMessage={sendMessage}
                        newMessageHeandler={newMessageHeandler}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default ContainerDialogs;