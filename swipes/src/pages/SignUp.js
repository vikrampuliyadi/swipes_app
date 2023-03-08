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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={handleFirstNameChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={handleLastNameChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
//   return (
//     <div className="container">
//       <header>
//         <h1 className="head">Sign Up</h1>
//       </header>
//       <body className="form">
//         <p className="cont firstName">First Name</p>
//         <input className="textBox1" />
//         <p className="cont lastName">Last Name</p>
//         <input className="textBox2" />
//         <p className="cont email">Email</p>
//         <input className="textBox3" />
//         <p className="cont password">Password</p>
//         <input className="textBox4" />
//         <Link to="/Main">
//           <button className="button">Create Account</button>{" "}
//         </Link>
//       </body>
//     </div>
//   );
// }

export default SignUpPage;
