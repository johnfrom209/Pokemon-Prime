import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import signin from "./SignUp";
import Rules from "./Rules";
import NewChallenge from "./challenge/Challenge";
//landing page
export default function landingPage() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Rules") {
      return <Rules />;
    }
    if (currentPage === "New Challenge") {
      return <NewChallenge />;
    }
    if (currentPage === "Sign In") {
      return <Login />;
    }
    if (currentPage === "Logout") {
      return <Logout />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
}
