import React, { useState } from "react";
import SocialMediaPost from "../Components/SocialMediaPost.js";
import "./Main.css";
import hamIcon from "../imgs/hamburger-icon.png";

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
                    <button className="ham-list-item">Feed</button>
                  </li>
                  <div className="space-between-menu-items"></div>
                  <li>
                    <button className="ham-list-item">Messages</button>
                  </li>
                  <div className="space-between-menu-items"></div>
                  <li>
                    <button className="ham-list-item">Post</button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      <SocialMediaPost
        author="Edmond"
        content="Bro someone lemme cop some swipes bro"
        price={9}
        diningHall="BPlate"
        timestamp="February 18, 2023 12:34 PM"
        paymentType="Zelle"
        date="Monday 5-6PM"
      />

      <SocialMediaPost
        logo
        author="Ryan"
        content="Swipe me in pls"
        price={8}
        diningHall="Feast"
        timestamp="January 18, 2023 12:34 PM"
        paymentType={"Venmo"}
        date="Wednesday 11:30-12:30PM"
      />
    </div>
  );
}

export default Main;
