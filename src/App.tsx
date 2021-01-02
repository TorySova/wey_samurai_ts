import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from 'redux';
import { RootStateType } from './redux/store';
import Preloader from './components/common/preloader/Preloader';

type AppPropsType = {
  initialized: boolean
  initializeApp: () => void 
}
class App extends React.Component<AppPropsType, any> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized){
     
      return <Preloader />
    }
    
    return (
      <div>
        <div className="container">
          <div className="navbarContainer">
            <NavbarContainer />
          </div>
          <div className="content">
            <Header />
            <Route exact path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/dialogs'
              render={() => <ContainerDialogs />} />
            <Route path='/news'
              render={() => <News />} />
            <Route path='/settings'
              render={() => <Settings />} />
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/login'
              render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateType) => ({
  initialized: state.app.initialized
})

export default compose<any>(
  withRouter,
  connect(mapStateToProps, { initializeApp })) (App);
