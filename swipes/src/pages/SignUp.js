import React, { useState } from "react";
import "./SignUp.css";

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
        <h1>Sign Up</h1>
      </header>
      <body>
        <p className="firstName">First Name</p>
        <input className="textBox1" />
        <p className="lastName">Last Name</p>
        <input className="textBox2" />
        <p className="email">Email</p>
        <input className="textBox3" />
        <p className="password">Password</p>
        <input className="textBox4" />
        <button className="button">Create Account</button>
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
