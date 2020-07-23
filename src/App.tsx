import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Event from './components/Event/Event';

const App = () => {
  return (
    <div className="appWrapper">
      <Navbar />
      <Profile />
      <Event />
    </div>
  );
}

export default App;
