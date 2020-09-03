import { dialodsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import {createStore, combineReducers} from "redux";

const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialodsReducer
});

export type RootState = ReturnType<typeof redusers>

const store = createStore(redusers);
export type SToreReduxType = typeof store

export default store;