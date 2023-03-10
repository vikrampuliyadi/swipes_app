import React, { useState } from "react";
import "./Login.css";
import "./SignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:3000/users/${email}/${password}`)
      .then((response) => {
        if (response.data) {
          console.log("User exists in database:", response.data);
          navigate("/Main");
        } else {
          console.log("User not found");
          window.alert("User not found");
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed to fetch user data. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <header>
          <h1 className="head">Login</h1>
        </header>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          ></input>
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          ></input>
        </label>

        <button className="loginButton container">Login</button>
      </div>
    </form>
  );
}

export default Login;
