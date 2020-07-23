import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Event from './components/Event';

const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Profile />
      <Event />
    </div>
  );
}

export default App;
