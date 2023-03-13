import React, { useState } from "react";
import hamIcon from "../imgs/hamburger-icon.png";
import "./Create_Requests.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import { getUserInfo } from "../../backend/routes/users";

function Create_Requests() {
  let navigate = useNavigate();
  const [diningHall, setDiningHall] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  let acceptedPost = "false";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //const userInfo = getUserInfo(session.id);
  // if (userInfo) {
  //   console.log(`User email: ${userInfo.email}`);
  // } else {
  //   console.log("No user information available");
  // }

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };
  const token = getTokenFromCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
  };

  const getUserEmail = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/users/api/user",
        config
      );
      const email = response.data.email;
      //console.log(email); // log user's email to the console
      return email;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = await getUserEmail();
    console.log(email);
    const post = {
      email: email,
      diningHall: diningHall,
      date: dateTime,
      price: price,
      paymentType: payment,
      contactInfo: contact,
      message: message,
      accepted: acceptedPost,
    };
    console.log(post);

    axios
    .post("http://localhost:3000/posts/add", post)
    .then((response) => {
      console.log(response.data);
      navigate("/Main");
    })
    .catch((error) => {
      console.log(error);
      window.alert("Post could not be created. Please try again.");
    });
  };

  return (
    <div>
      <div className="form-container">
        <form id="myForm" className="form" onSubmit={handleSubmit}>
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
            type="text"
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

          <button className="btn">Post</button>

        </form>
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
    </div>
  );
}

export default Create_Requests;
