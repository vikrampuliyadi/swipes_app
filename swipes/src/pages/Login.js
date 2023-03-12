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

  // const handleSubmit = (event) => {

  //   axios
  //     .get(`http://localhost:3000/users/${email}/${password}`)
  //     .then((response) => {
  //       if (response.data) {
  //         console.log("User exists in database:", response.data);
  //       } else {
  //         console.log("User not found");
  //         window.alert("User not found");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.alert("Failed to fetch user data. Please try again.");
  //     });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/auth/signin/", { email, password }, { withCredentials: true })
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

  // const handleSubmit = async () => {

  //   // console.log("hi");
  //   // try {
  //   //   const response = await axios.post("/users/auth/signin", {
  //   //     email,
  //   //     password,
  //   //   });
  //   //   const { message, auth } = response.data;
  //   //   console.log(message); // "You are successfully login" or "Unable to login"

  //   //   console.log(auth); // true or false
  //   // } catch (error) {
  //   //   console.error(error);
  //   // }
  // };

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
