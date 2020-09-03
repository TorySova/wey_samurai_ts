import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { DialogsPageType, ProfilePageType } from './redux/store';
import { Store, CombinedState } from 'redux';
import { ActionTypes } from './redux/dialogsReducer';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';


type PropsType = {
  store: Store<CombinedState<{
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
}>, ActionTypes>
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
            render={() => <Profile store={props.store}/>} />
          <Route path='/dialogs'
            render={() => <ContainerDialogs store={props.store} />} />
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
