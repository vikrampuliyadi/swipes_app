import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import profilePic from "../imgs/default-profile-picture.png";
import hamIcon from "../imgs/hamburger-icon.png";

function Star({ filled, onClick }) {
  return (
    <span
      className="star"
      onClick={onClick}
      style={{ color: filled ? "gold" : "gray", fontSize: "75px" }}
    >
      &#9733;
    </span>
  );
}

function Profile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="profile" style={{ backgroundColor: "#109BFF" }}>
      <header className="profile-header">
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
                        <button className="ham-list-item">Feed</button>
                      </Link>
                    </li>
                    <div className="space-between-menu-items"></div>
                    <li>
                      <Link to="/Create_Requests">
                        <button className="ham-list-item">Post</button>
                      </Link>
                    </li>
                    <div className="space-between-menu-items"></div>
                    <li>
                      <Link to="/Profile">
                        <button className="ham-list-item">Profile</button>
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
        <div className="padding"></div>
        <div>
          <img src={profilePic} className="profile-picture" alt="Profile" />
        </div>
        <div>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              filled={index < rating}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
        <p style={{ color: "white" }}>January 1, 2023</p>
        <p className="sc-head" style={{ color: "white" }}>
          UCLA Recommended Amount
        </p>
        <p className="btncontainer" >
          <input type="button" value="11R" />
          <input type="button" value="11P" />
          <input type="button" value="14R" />
          <input type="button" value="14P" />
          <input type="button" value="19R" />
          <input type="button" value="19P" />
        </p>
        <p className="sc-head" style={{ color: "white" }}>
          Swipes Remaining
        </p>
        <p className="sc" style={{ color: "white" }}>
          100
        </p>
        <div className="padding"></div>
      </header>
    </div>
  );
}

export default Profile;
