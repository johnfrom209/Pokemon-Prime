import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Rules from "./Rules";
import NewChallenge from "../challenge/Challenge";
import SignUp from "./SignUp";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
//import Profile from "./Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//landing page
export default function Main() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="flex flex-col justify-between ">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/new-challenge" element={<NewChallenge />}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            {/* <Route path="/profile" element={<Profile />}></Route> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
