import React from "react";
import "./Home.css";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>BSwipe</h1> */}
        <div>
            <img src={logo} className="logo" alt="Profile" />
          </div>
        <h2 className="h2">Buying and selling swipes has never been this easy</h2>
        <div className="App-buttons">
          <Link to="/SignUp">
            <button className="App-signup-button">Sign Up</button>
          </Link>
          <Link to="/Login">
            <button className="App-login-button">Log In</button>
          </Link>
        </div>
      </header>
      <div className="padding"></div>
    </div>
  );
}

export default Home;
