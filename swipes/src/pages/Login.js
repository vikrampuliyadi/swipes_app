import React, { useState } from "react";
import "./Login.css";
import "./SignUp.css";

import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <header>
        <h1 className="head">Login</h1>
      </header>
      <body className="form">
        <p className="title container">Email</p>
        <input className="loginText1 container" />
        <p className="title container">Password</p>
        <input className="loginText2 container" />
        <Link to="/Main">
          {" "}
          <button className="loginButton container">Login</button>
        </Link>
      </body>
    </div>
  );
}

export default Login;
