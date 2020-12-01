import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import StoreContext from './StoreContext';


// export let renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
// }
// renderTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState()
//   renderTree(state)
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
