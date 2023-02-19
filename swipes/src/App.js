<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> main
import './App.css';
import hamIcon from './hamburger-icon.png';

function MyForm() {
  const [diningHall, setDiningHall] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [price, setPrice] = useState('');
  const [payment, setPayment] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

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
<<<<<<< HEAD
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


    <div className='btn'>
    <input type="submit" value="Post" />
=======
    <div className="App">
      <header className="App-header">
        <h1>SwipeX</h1>
        <h2>Welcome to SwipeX, where you can buy and sell meal swipes for the UCLA dining halls!</h2>
        <div className="App-buttons">
          <button className="App-signup-button">Sign Up</button>
          <button className="App-login-button">Log In</button>
        </div>
      </header>
>>>>>>> main
    </div>

    <button className="hamburger-menu-button" onClick={handleMenuClick}>
            <img src={hamIcon} alt="menu" className="hamburger-icon"></img>
          </button>
    </form>
  );
}

export default MyForm;
