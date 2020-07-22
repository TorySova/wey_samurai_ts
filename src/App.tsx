import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="appWrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" />
      </header>
      <nav className="nav">
        <div>
          <a> Profile </a>
        </div>
        <div>
          <a> Messages </a>
        </div>
        <div>
          <a> News </a>
        </div>
        <div>
          <a> Music </a>
        </div>
        <div>
          <a> Settings </a>
        </div>

      </nav>
      <div className="content">
        <div>
          <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" />
        </div>
        <div>
          ava + discription
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
        </div>
        <div>
          <div>
            Post 1
        </div>
          <div>
            Post 2
        </div>
        </div>
      </div>

      <div className="streem">
        Streem
      </div>
    </div>
  );
}

export default App;
