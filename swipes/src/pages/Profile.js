import React, { useState, useEffect } from 'react';
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

  function calculateDaysElapsed(startDate, endDate) {
    // Calculate the difference in milliseconds between the two dates
    const timeDiff = endDate.getTime() - startDate.getTime();
  
    // Calculate the number of milliseconds in a day
    const oneDay = 1000 * 60 * 60 * 24;
  
    // Divide the time difference by the number of milliseconds in a day to get the number of days
    const daysElapsed = Math.round(timeDiff / oneDay);
  
    return daysElapsed;
  }
  
  const elevenRSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const dayWord = date.getDay();
    let swipes;
    if (dayWord === 0) {
      swipes = 0;
    } else if (dayWord === 1) {
      swipes = 11;
    } else if (dayWord === 2) {
      swipes = 9;
    } else if (dayWord === 3) {
      swipes = 7;
    } else if (dayWord === 4) {
      swipes = 5;
    } else if (dayWord === 5) {
      swipes = 3;
    } else if (dayWord === 6) {
      swipes = 1;
    }
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the week.`);
  }

  const elevenPSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    
    const startDate = new Date('2023-01-08'); //UPDATE DATE FOR EACH QUARTER
    const endDate = new Date();
    const daysElapsed = calculateDaysElapsed(startDate, endDate);
    const initialSwipes = 121;

     //Number of weekends passed
    let weekendsElapsed = Math.floor(daysElapsed / 7);
    // If the current day is a Saturday or Sunday, add an extra weekend
    if (day % 7 === 6) {
      weekendsElapsed += 1;
      weekendsElapsed /= 2;
      weekendsElapsed = Math.floor(weekendsElapsed);
    }
    console.log(weekendsElapsed);

    //Number of weekdays passed
    const weekdaysElapsed = daysElapsed - (weekendsElapsed*2);
    console.log(weekdaysElapsed);
    //Total number of swipes used
    const totalSwipesUsed = (weekdaysElapsed*1.6 + (weekendsElapsed*2));

    //Number of swipes left
    const swipes = Math.floor(initialSwipes - totalSwipesUsed - 1);

    // alert(`Days elapsed: ${daysElapsed}`);
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the quarter.`);
  }

  const fourteenRSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const dayWord = date.getDay();
    let swipes;
    if (dayWord === 0) {
      swipes = 2;
    } else if (dayWord === 1) {
      swipes = 14;
    } else if (dayWord === 2) {
      swipes = 12;
    } else if (dayWord === 3) {
      swipes = 10;
    } else if (dayWord === 4) {
      swipes = 8;
    } else if (dayWord === 5) {
      swipes = 6;
    } else if (dayWord === 6) {
      swipes = 4;
    }
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the week.`);
  }

  const fourteenPSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    const startDate = new Date('2023-01-08');
    const endDate = new Date();
    const daysElapsed = calculateDaysElapsed(startDate, endDate);
    const initialSwipes = 152;

    // Calculate the total number of swipes used so far
  const totalSwipesUsed = daysElapsed * 2;

  // Calculate the number of swipes left
  const swipes = initialSwipes - totalSwipesUsed + 2;

    // alert(`Days elapsed: ${daysElapsed}`);
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the quarter.`);
  }

  const nineteenRSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const dayWord = date.getDay();
    let swipes;
    if (dayWord === 0) {
      swipes = 2;
    } else if (dayWord === 1) {
      swipes = 19;
    } else if (dayWord === 2) {
      swipes = 16;
    } else if (dayWord === 3) {
      swipes = 13;
    } else if (dayWord === 4) {
      swipes = 10;
    } else if (dayWord === 5) {
      swipes = 7;
    } else if (dayWord === 6) {
      swipes = 4;
    }
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the week.`);
  }

  const nineteenPSwipesLeft = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    const startDate = new Date('2023-01-08');
    // const endDate = new Date('2023-03-06');
    const endDate = new Date();

    const daysElapsed = calculateDaysElapsed(startDate, endDate);
    const initialSwipes = 209;

    //number of weekends passed
    let weekendsElapsed = Math.floor(daysElapsed / 7) * 2;
    //If day is a Saturday or Sunday, subtract an extra 2 swipes
    if (day % 7 === 6 || day % 7 === 0) {
      weekendsElapsed += 2;
    }
    //number of weekdays passed
    const weekdaysElapsed = daysElapsed - weekendsElapsed;
    //Total number of swipes used so far
    const totalSwipesUsed = weekdaysElapsed * 3 + weekendsElapsed * 2;

    // Calculate the number of swipes left
    const swipes = initialSwipes - totalSwipesUsed - 1;

    // alert(`Days elapsed: ${daysElapsed}`);
    alert(`Today's date is ${month} ${day}, ${year}. At the beginning of today you should have ${swipes} swipes left for the quarter.`);
  } 

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
        <p className="sc-head" style={{ color: "white" }}>
          UCLA Recommended Amount
        </p>
        <p className="btncontainer" >
          <input type="button" value="11R" onClick={elevenRSwipesLeft} />
          <input type="button" value="11P" onClick={elevenPSwipesLeft} />
          <input type="button" value="14R" onClick={fourteenRSwipesLeft}/>
          <input type="button" value="14P" onClick={fourteenPSwipesLeft}/>
          <input type="button" value="19R" onClick={nineteenRSwipesLeft}/>
          <input type="button" value="19P" onClick={nineteenPSwipesLeft}/>
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
