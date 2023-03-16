import React, { useState } from "react";
import "./Main.css";
import hamIcon from "../imgs/hamburger-icon.png";
import { Link } from "react-router-dom";
import Feed from "../Components/Feed";

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div>
        <button className="hamburger-menu-button" onClick={handleMenuClick}>
          <img src={hamIcon} alt="menu" className="hamburger-icon"></img>
        </button>
        {isMenuOpen && (
          <div>
            <nav>
              <ul className="hamburger-menu">
                <li>
                  <Link to="/Main">
                    <button className="dropdown ham-list-item">Feed</button>
                  </Link>
                </li>
                <div className="space-between-menu-items"></div>
                <li>
                  <Link to="/Create_Requests">
                    <button className="dropdown ham-list-item">Post</button>
                  </Link>
                </li>
                <div className="space-between-menu-items"></div>
                <li>
                  <Link to="/Profile">
                    <button className="dropdown ham-list-item">Profile</button>
                  </Link>
                </li>
                <div className="space-between-menu-items"></div>
                <li>
                  <Link to="/Home">
                    <button className="dropdown ham-list-item">Sign Out</button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      <div className="empty_space"></div>
      <center>
        <h1 className="post-label">Posts</h1>
      </center>

      <Feed />
    </div>
  );
}

export default Main;
