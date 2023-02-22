import React from "react";
import SocialMediaPost from "../Components/SocialMediaPost.js";
import "./Main.css";
import hamIcon from "../imgs/hamburger-icon.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/Profile">
        {" "}
        <button className="hamburger-menu-button">
          <img src={hamIcon} alt="menu" className="hamburger-icon"></img>
        </button>
      </Link>

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
