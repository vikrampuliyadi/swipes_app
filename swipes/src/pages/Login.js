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
        <h1>Login</h1>
      </header>
      <body>
        <p className="loginEmail">Email</p>
        <input className="loginText1" />
        <p className="loginPassword">Password</p>
        <input className="loginText2" />
        <Link to="/Main">
          {" "}
          <button className="loginButton">Login</button>
        </Link>
      </body>
    </div>
  );
}

export default Login;
