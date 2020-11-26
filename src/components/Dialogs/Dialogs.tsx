import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../redux/store';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControll/FormsControls';
import { maxLendthCreator, required } from '../../utils/validators/validator';

export type DialogsPropsType = {
    dialogsPage: DialogsPageType;
    sendMessage: (addMessage: string) => void;
    newMessageHeandler: (text: string) => void;
    auth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    let dialodsElements = props.dialogsPage.dialogs.map(it => <DialogItem key={it.id} name={it.name} id={it.id} />);
    let messageElements = props.dialogsPage.messages.map(elem => <Message key={elem.id} message={elem.message} />);

    const onSubmit = (values: AddMessagePropsType) => {
        props.sendMessage(values.addMessage)
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
                    <AddMessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export type AddMessagePropsType = {
    addMessage: string
}
const maxLength50 = maxLendthCreator(1500)
const AddMessageForm: React.FC<InjectedFormProps<AddMessagePropsType>> = (props: InjectedFormProps<AddMessagePropsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'addMessage'}
                component={Textarea}
                validate={[required, maxLength50]}
                placeholder="Enter your message" />
            <div className={s.button}>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessagePropsType>({
    form: 'addMessage'
})(AddMessageForm)

export default Dialogs;