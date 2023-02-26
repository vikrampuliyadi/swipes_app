import React, { useState } from "react";
import hamIcon from "../imgs/hamburger-icon.png";
import "./Create_Requests.css";
import { Link } from "react-router-dom";

function Create_Requests() {
  const [diningHall, setDiningHall] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      diningHall,
      dateTime,
      price,
      payment,
      contact,
      message,
    };
    console.log(formData);
  };

  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <label htmlFor="diningHall">Dining Hall:</label>
      <input
        type="text"
        id="diningHall"
        name="diningHall"
        value={diningHall}
        onChange={(event) => setDiningHall(event.target.value)}
      />

      <label htmlFor="dateTime">Date/Time:</label>
      <input
        type="text"
        id="dateTime"
        name="dateTime"
        value={dateTime}
        onChange={(event) => setDateTime(event.target.value)}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <label htmlFor="payment">Payment Type:</label>
      <input
        type="text"
        id="payment"
        name="payment"
        value={payment}
        onChange={(event) => setPayment(event.target.value)}
      />

      <label htmlFor="contact">Contact Info:</label>
      <input
        type="email"
        id="contact"
        name="contact"
        value={contact}
        onChange={(event) => setContact(event.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="btn">
        <input type="submit" value="Post" />
      </div>

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
                  <button className="ham-list-item">Messages</button>
                </li>
                <div className="space-between-menu-items"></div>
                <li>
                  <Link to="/Create_Requests">
                    {" "}
                    <button className="ham-list-item">Post</button>{" "}
                  </Link>{" "}
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </form>
  );
}

export default Create_Requests;
