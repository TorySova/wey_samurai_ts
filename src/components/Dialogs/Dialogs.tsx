import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogItemPropsType = {
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Ed" id={1} />
                <DialogItem name="Alina" id={2} />
                <DialogItem name="Oksana" id={3} />
                <DialogItem name="Sasha" id={4} />
                <DialogItem name="Tanya" id={5} />
            </div>
            <div className={s.messagesItem}>
                <Message message="Hello!" />
                <Message message="Wat`s up?" />
                <Message message="Wow!" />
                <Message message="Ahahaha" />
                <Message message="I`m fine(:" />
            </div>
        </div>
    )
}

export default Dialogs;