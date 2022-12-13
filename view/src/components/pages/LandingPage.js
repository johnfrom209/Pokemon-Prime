import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Rules from "./Rules";
import NewChallenge from "../challenge/Challenge";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Profile from "./Profile";
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
    if (currentPage === "Profile") {
      return <Profile />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="flex flex-col justify-between ">
      {renderPage()}
      <Footer />
      </div>
    </div>

  );
}
