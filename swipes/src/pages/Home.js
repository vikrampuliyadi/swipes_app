import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BSwipe</h1>
        <h2>Buying and selling swipes has never been this easy</h2>
        <div className="App-buttons">
          <Link to="/SignUp">
            <button className="App-signup-button">Sign Up</button>
          </Link>
          <Link to="/Login">
            <button className="App-login-button">Log In</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
