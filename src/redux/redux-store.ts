import { authReducer } from './authReducer';
import { userReducer } from './usersReducer';
import { dialodsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialodsReducer,
    usersPage: userReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof redusers>

const store = createStore(redusers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store
export type SToreReduxType = typeof store

export default store;
