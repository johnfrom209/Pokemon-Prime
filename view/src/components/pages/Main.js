import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Rules from "./Rules";
import NewChallenge from "../challenge/Challenge";
import SignUp from "./SignUp";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//landing page

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState("New Challenge");

  const renderPage = () => {
    if (currentPage === "LandingPage") {
      return <LandingPage />;
    }
    if (currentPage === "Rules") {
      return <Rules />;
    }
    if (currentPage === "New Challenge") {
      return <NewChallenge />;
    }

    if (currentPage === "Sign up") {
      return <SignUp />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Logout") {
      return <NewChallenge />;
    }
    if(currentPage === "Profile") {
      return <Profile />
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LandingPage/>}
          >
          </Route>
          <Route
            path="/login"
            element={<Login/>}
          >
          </Route>
          <Route
            path="/signup"
            element={<SignUp/>}
          >
          </Route>
          <Route
            path="/new-challenge"
            element={<NewChallenge/>}
          >
          </Route>
          <Route
            path="/rules"
            element={<Rules/>}
          >
          </Route>
          <Route
            path="/profile"
            element={<Profile/>}
          >
          </Route>
        </Routes>
      </Router>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="flex flex-col justify-between ">
      {renderPage()}
      <Footer />
      </div>
    </div>

  );
}
