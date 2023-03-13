import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  let navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/users/add", user)
      .then((response) => {
        console.log(response.data);
        navigate("/Login");
      })
      .catch((error) => {
        console.log(error);
        window.alert("User could not be created. Please try again.");
      });
  };
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape1"></div>
      <form onSubmit={handleSubmit} className="form-signup">
        <h3>Sign Up</h3>

        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          value={firstname}
          onChange={handleFirstNameChange}
          required
          placeholder="First Name"
          id="firstname"
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          value={lastname}
          onChange={handleLastNameChange}
          required
          placeholder="Last Name"
          id="lastname"
        />

        <label htmlFor="username">Email</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Email"
          id="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          placeholder="Password"
          id="password"
        />

        <button type="submit" className="btn-sign-up">
          Create Account
        </button>
      </form>
    </div>
  );
}
export default SignUpPage;
