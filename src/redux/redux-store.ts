import { dialodsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import {createStore, combineReducers} from "redux";

const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialodsReducer
});

const store = createStore(redusers);

export default store;
