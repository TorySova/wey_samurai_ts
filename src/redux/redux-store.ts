import { userReducer } from './usersReducer';
import { dialodsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import {createStore, combineReducers} from "redux";

const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialodsReducer,
    usersPage: userReducer
});

export type RootState = ReturnType<typeof redusers>

const store = createStore(redusers);
//@ts-ignore
window.store = store
export type SToreReduxType = typeof store

export default store;
