import React, { useState } from "react";
import SocialMediaPost from "../Components/SocialMediaPost.js";
import "./Main.css";
import hamIcon from "../imgs/hamburger-icon.png";
import { Link } from "react-router-dom";
import Feed from "../Components/Feed";

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDiningHall, setSelectedDiningHall] = useState(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilterClick = () => {
    // Refresh the feed with the selected dining hall
    console.log("Filtering by", selectedDiningHall);
  };

  const handleDiningHallSelect = (event) => {
    setSelectedDiningHall(event.target.value);
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
      <div className="empty_space">
        <label htmlFor="dining-hall-select">Select a dining hall:</label>
        <select
          id="dining-hall-select"
          value={selectedDiningHall}
          onChange={handleDiningHallSelect}
          style={{ width: "200px" }}
        >
          <option value="">All</option>
          <option value="ASUCLA Ticket">ASUCLA Ticket</option>
          <option value="BCafe">BCafe</option>
          <option value="BPlate">BPlate</option>
          <option value="De Neve">De Neve</option>
          <option value="Epicuria">Epicuria</option>
          <option value="Feast">Feast</option>
          <option value="Food Truck Ticket">Food Truck Ticket</option>
          <option value="Epicuria at Ackerman">Epicuria at Ackerman</option>
          <option value="Rende East">Rende East</option>
          <option value="Rende West">Rende West</option>
          <option value="The Drey">The Drey</option>
          <option value="The Study">The Study</option>
        </select>
        <button className="filter-button" onClick={handleFilterClick}>
          Filter
        </button>
      </div>
      <div className="empty_space"></div>
      <Feed />
    </div>
  );
}

export default Main;
