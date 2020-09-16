import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import UsersContainer from './components/Users/UsersContainer';


// type PropsType = {
//   store: Store<CombinedState<{
//     profilePage: ProfilePageType;
//     dialogsPage: DialogsPageType;
// }>, ActionTypes>
// }

const App = () => {
  // const state = props.store.getState()

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Navbar />
        <div className="content">
          <Header />
          <Route path='/profile'
            render={() => <Profile />} />
          <Route path='/dialogs'
            render={() => <ContainerDialogs />} />
          <Route path='/news'
            render={() => <News />} />
          <Route path='/music'
            render={() => <Music />} />
          <Route path='/settings'
            render={() => <Settings />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
