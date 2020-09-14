import { ActionProfileTypes } from './profileReducer';
import { DialogsPageType } from './store';

type initialStateType = {
    dialogs: {
        name: string;
        id: number;
    }[];
    messages: {
        message: string;
        id: number;
    }[];
    newMessageText: string;
}

const initialState: initialStateType = {
    dialogs: [
        { name: "Ed", id: 1 },
        { name: "Alina", id: 2 },
        { name: "Oksana", id: 3 },
        { name: "Sasha", id: 4 },
        { name: "Tanya", id: 5 },
    ],

    messages: [
        { message: "Hello", id: 1 },
        { message: ":)", id: 2 },
        { message: "Wow", id: 3 },
        { message: "Ahahaha", id: 4 },
        { message: "I`m fine(:", id: 5 },
        { message: "(:", id: 6 },
    ],
    newMessageText: "",
}

export const dialodsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "CHANGE-MESSAGE-TEXT": {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.newMessage;
            return stateCopy
        }
        case "SEND-MESSAGE": {
            const newMessage = {
                id: new Date().getTime(),
                message: state.newMessageText
            };
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages, newMessage]
            stateCopy.newMessageText = "";
            return stateCopy
        }
    }
    return state
}
export type ActionTypes = ActionDialogsTypes | ActionProfileTypes

export type ActionDialogsTypes = ReturnType<typeof sendMessageAC> |
    ReturnType<typeof changeNewMessageAC>

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
        // messageText: messageText
    } as const
}

export const changeNewMessageAC = (newMessage: string) => {
    return {
        type: "CHANGE-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}