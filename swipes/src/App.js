import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile.js";
import Create_Requests from "./pages/Create_Requests";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";
import SignUpPage from "./pages/SignUp.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Create_Requests" element={<Create_Requests />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
