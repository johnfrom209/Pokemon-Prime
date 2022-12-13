import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Rules from "./Rules";
import NewChallenge from "./challenge/Challenge";
import SignUp from "./SignUp";
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
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      
    </div>
  );
}
