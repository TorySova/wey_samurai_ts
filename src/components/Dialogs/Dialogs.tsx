import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType, ActionTypes, sendMessageAC, changeNewMessageAC } from '../../redux/state';

type PropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch: (action: ActionTypes) => void
    newMessage: string
}

const Dialogs = (props: PropsType) => {
    let dialodsElements = props.dialogs.map(it => <DialogItem name={it.name} id={it.id} />);
    let messageElements = props.messages.map(elem => <Message message={elem.message} />);

    const sendMessage = () => {
        props.dispatch(sendMessageAC(props.newMessage))
    }

    let newMessageElem = React.createRef<HTMLTextAreaElement>();
	let newMessageHeandler = () => {
		let text = newMessageElem.current ? newMessageElem.current.value : ""
		props.dispatch(changeNewMessageAC(text))
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
                    value={props.newMessage}
                    onChange={newMessageHeandler}/>
                <button className={s.button} onClick={sendMessage}>Send</button>
            </div>
            </div>
            
        </div>
    )
}

export default Dialogs;