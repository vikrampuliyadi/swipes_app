import React, { useState } from "react";
import "./Login.css";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/users/auth/signin/",
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        const { message, auth } = response.data;
        navigate("/Main");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <form className="form-login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label htmlFor="username">Email</label>
        <div className="login-input">
          <input
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
            id="username"
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className="login-input">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Password"
            id="password"
          />
        </div>

        <button className="btn-login loginButton container">Login</button>
      </form>
    </div>
  );
}

export default Login;
