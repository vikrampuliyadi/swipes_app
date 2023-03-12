import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape1"></div>
      <form className="form-login">
        <h3>Login</h3>

        <label htmlFor="username">Email</label>
        <div className="login-input">
          <input type="text" placeholder="Email" id="username" />
        </div>

        <label htmlFor="password">Password</label>
        <div className="login-input">
          <input type="text" placeholder="Password" id="password" />
        </div>
        <Link to="/Main">
          {" "}
          <button className="btn-login">Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
