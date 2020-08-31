import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { StoreType } from './redux/state';


type PropsType = {
  store: StoreType
}

const App = (props: PropsType) => {
  const state = props.store.getState()

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Navbar />
        <div className="content">
          <Header />
          <Route path='/profile'
            render={() => <Profile posts={state.profilePage.posts}
              message={state.profilePage.newPostText}
              dispatch={props.store.dispatch.bind(props.store)}
              />} />
          <Route path='/dialogs'
            render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
              messages={state.dialogsPage.messages}
              newMessage={state.dialogsPage.newMessageText}
              dispatch={props.store.dispatch.bind(props.store)} />} />
          <Route path='/news'
            render={() => <News />} />
          <Route path='/music'
            render={() => <Music />} />
          <Route path='/settings'
            render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
