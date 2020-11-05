import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType, DialogsPageType } from '../../redux/store';
import { Redirect } from 'react-router-dom';

type PropsType = {
    dialogsPage: DialogsPageType;
    sendMessage: () => void;
    newMessageHeandler: (text: string) => void;
    auth: boolean
    // sendMessage: () => void
    // newMessageHeandler: (text: string) => void
    // dialogs: DialogsType[]
    // messages: MessagesType[]
    // newMessageText: string
}

const Dialogs = (props: PropsType) => {
    let dialodsElements = props.dialogsPage.dialogs.map(it => <DialogItem key={it.id} name={it.name} id={it.id} />);
    let messageElements = props.dialogsPage.messages.map(elem => <Message key={elem.id} message={elem.message} />);

    const sendMessage = () => {
        props.sendMessage()
    }

    let newMessageElem = React.createRef<HTMLTextAreaElement>();
    let newMessageHeandler = () => {
        let text = newMessageElem.current ? newMessageElem.current.value : ""
        props.newMessageHeandler(text)
    }

    if(!props.auth){
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsName}>
                <div className={s.name}>
                    {dialodsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    {messageElements}
                </div>
                <div className={s.inputMessage}>
                    <textarea placeholder="Enter your message"
                        className={s.textarea}
                        ref={newMessageElem}
                        value={props.dialogsPage.newMessageText}
                        onChange={newMessageHeandler} />
                    <div className={s.button}>
                        <img src={'https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-1-715x657.png'} className={s.buttonImg} onClick={sendMessage} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;