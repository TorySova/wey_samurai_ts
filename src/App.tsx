import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import state, { addPost, changeNewText } from './redux/state';


const App = () => {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Navbar />
        <div className="content">
          <div className="header">header</div>
          <Route path='/profile'
            render={() => <Profile posts={state.profilePage.posts}
              addPost={addPost}
              message={state.profilePage.newPostText}
              changeNewText={changeNewText} />}/>
          <Route path='/dialogs'
            render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
