import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="background">
      <div className="login-shape"></div>
      <div className="shape1"></div>
      <form className = "form-login">
        <h3>Login</h3>

        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Email" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <Link to="/Main">
          {" "}
          <button>Log In</button>
        </Link>
        {/* <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Login;