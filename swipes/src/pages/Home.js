import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SwipeX</h1>
        <h2>Welcome to SwipeX, where you can buy and sell meal swipes for the UCLA dining halls!</h2>
        <div className="App-buttons">
          <button className="App-signup-button">Sign Up</button>
          <button className="App-login-button">Log In</button>
        </div>
      </header>
    </div>
  );
}

export default Home;
