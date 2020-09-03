import { SToreReduxType } from './redux/redux-store';
import React from 'react';

const StoreContext = React.createContext({} as SToreReduxType);

export default StoreContext;