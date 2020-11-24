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
}

export const dialodsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const body = action.addMessage            
            return {
                ...state,
                messages: [...state.messages, {id: new Date().getTime(), message: body}],
            }
        }
    }
    return state
}
export type ActionTypes = ActionDialogsTypes | ActionProfileTypes

export type ActionDialogsTypes = ReturnType<typeof sendMessageAC> 

export const sendMessageAC = (addMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        addMessage
    } as const
}
