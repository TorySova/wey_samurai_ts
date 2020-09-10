import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType, DialogsPageType } from '../../redux/store';

type PropsType = {
    dialogsPage: DialogsPageType;
    sendMessage: () => void;
    newMessageHeandler: (text: string) => void;
    // sendMessage: () => void
    // newMessageHeandler: (text: string) => void
    // dialogs: DialogsType[]
    // messages: MessagesType[]
    // newMessageText: string
}

const Dialogs = (props: PropsType) => {
    let dialodsElements = props.dialogsPage.dialogs.map(it => <DialogItem name={it.name} id={it.id} />);
    let messageElements = props.dialogsPage.messages.map(elem => <Message message={elem.message} />);

    const sendMessage = () => {
        props.sendMessage()
    }

    let newMessageElem = React.createRef<HTMLTextAreaElement>();
    let newMessageHeandler = () => {
        let text = newMessageElem.current ? newMessageElem.current.value : ""
        props.newMessageHeandler(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialodsElements}
            </div>
            <div className={s.messagesItem}>
                {messageElements}
                <div>
                    <textarea placeholder="Enter your message"
                        className={s.textarea}
                        ref={newMessageElem}
                        value={props.dialogsPage.newMessageText}
                        onChange={newMessageHeandler} />
                    <button className={s.button} onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;