import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

export type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData= [
        { name: "Ed", id: 1 },
        { name: "Alina", id: 2 },
        { name: "Oksana", id: 3 },
        { name: "Sasha", id: 4 },
        { name: "Tanya", id: 5 },
    ]

    let dialodsElements = dialogsData.map(it => <DialogItem name={it.name} id={it.id} /> );

    let messageData = [
        { message: "Hello", id: 1 },
        { message: "Wat`s up?", id: 2 },
        { message: "Wow", id: 3 },
        { message: "Ahahaha", id: 4 },
        { message: "I`m fine(:", id: 5 },
    ]
    let messageElements = messageData.map(elem => <Message message={elem.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialodsElements}
            </div>
            <div className={s.messagesItem}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;