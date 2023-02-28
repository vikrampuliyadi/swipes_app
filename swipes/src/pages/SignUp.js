import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <header>
        <h1 className="head">Sign Up</h1>
      </header>
      <body className="form">
        <p className="cont firstName">First Name</p>
        <input className="textBox1" />
        <p className="cont lastName">Last Name</p>
        <input className="textBox2" />
        <p className="cont email">Email</p>
        <input className="textBox3" />
        <p className="cont password">Password</p>
        <input className="textBox4" />
        <Link to="/Main">
          <button className="button">Create Account</button>{" "}
        </Link>
      </body>
    </div>
  );
}

export default SignUpPage;

// <form onSubmit={handleSubmit}>
//   <h1>Sign Up</h1>

//   {error && <p>{error}</p>}

//   <label>
//     Email:
//     <input
//       type="email"
//       value={email}
//       onChange={handleEmailChange}
//       required
//     />
//   </label>

//   <label>
//     Password:
//     <input
//       type="password"
//       value={password}
//       onChange={handlePasswordChange}
//       required
//     />
//   </label>

//   <label>
//     Confirm Password:
//     <input
//       type="password"
//       value={confirmPassword}
//       onChange={handleConfirmPasswordChange}
//       required
//     />
//   </label>

//   <button type="submit">Sign Up</button>
// </form>
