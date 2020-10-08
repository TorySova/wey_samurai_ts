import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="navbarContainer">
          <NavbarContainer />
        </div>
        <div className="content">
          <Header />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/dialogs'
            render={() => <ContainerDialogs />} />
          <Route path='/news'
            render={() => <News />} />
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
