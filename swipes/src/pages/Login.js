import React, { useState } from "react";
import "./Login.css";
import "./SignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="container">
//       <header>
//         <h1 className="head">Login</h1>
//       </header>
//       <body className="form">
//         <p className="title container">Email</p>
//         <input className="loginText1 container" />
//         <p className="title container">Password</p>
//         <input className="loginText2 container" />
//         <Link to="/Main">
//           {" "}
//           <button className="loginButton container">Login</button>
//         </Link>
//       </body>
//     </div>
//   );
// }

// export default Login;

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
      .post(
        "http://localhost:3000/users/auth/signin/",
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        const { message, auth } = response.data;
        console.log(response.data); // "You are successfully login" or "Unable to login"

        navigate("/Main");
        console.log(auth); // true or false
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="background">
      <div className="login-shape"></div>
      <div className="shape1"></div>

      <form className="form-login" onSubmit={handleSubmit}>
        <h3>Login</h3>

        <label htmlFor="username">Email</label>
        <div className="login-input">
          <input
            // type="text"
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
