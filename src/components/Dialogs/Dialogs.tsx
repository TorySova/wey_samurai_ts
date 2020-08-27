import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType } from '../../redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const Dialogs = (props: PropsType) => {
    let dialodsElements = props.dialogs.map(it => <DialogItem name={it.name} id={it.id} />);
    let messageElements = props.messages.map(elem => <Message message={elem.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialodsElements}
            </div>
            <div className={s.messagesItem}>
                {messageElements}
                <div>
                <textarea placeholder="Enter your message"
                    className={s.textarea}/>
                <button className={s.button}>Send</button>
            </div>
            </div>
            
        </div>
    )
}

export default Dialogs;