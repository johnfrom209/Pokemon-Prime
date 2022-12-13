//navbar for home page should display
//rules, new challenge, sign in/logout

//navbar for rules page should display
//home, new challenge, sign in/logout

//navbar for new challenge page should display
//home, rules, sign in/logout

import React from "react";
import PPlogo from "../images/PP.PNG";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header className="flex-row px-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <a
          onClick={() => handlePageChange("LandingPage")}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#landing-page"
    
        >
            <img className="w-8 h-8 mr-2" src={PPlogo} alt="logo" />
          <span className="ml-3 text-xl">Pokemon Prime</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            onClick={() => handlePageChange("Rules")}
            className="mr-5 hover:text-gray-900"
            href="#rules"
          >
            Rules
          </a>
          <a
            onClick={() => handlePageChange("New Challenge")}
            className="mr-5 hover:text-gray-900"
            href="#new-challenge"
          >
            New Challenge
          </a>
          <a
            onClick={() => handlePageChange("Sign up")}
            className="mr-5 hover:text-gray-900"
            href="#Signup"
          >
            Sign up
          </a>
          <a
            onClick={() => handlePageChange("Login")}
            className="mr-5 hover:text-gray-900"
            href="#Login"
          >
            Login
          </a>
          {/*
          <a
            onClick={() => handlePageChange("Profile")}
            className="mr-5 hover:text-gray-900"
            href="#profile"
          >
            Profile
          </a>
          <a
            onClick={() => handlePageChange("SignOut")}
            className="mr-5 hover:text-gray-900"
            href="#login"
          >
            Sign Out
          </a>
          */}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
