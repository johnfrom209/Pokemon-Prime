//navbar for home page should display
//rules, new challenge, sign in/logout

//navbar for rules page should display
//home, new challenge, sign in/logout

//navbar for new challenge page should display
//home, rules, sign in/logout

import React from "react";
import PPlogo from "../../images/PP.PNG";

import Auth from "../../utils/auth";

function Navbar({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="flex-row px-1 bg-blue-900 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-10 h-10 mr-2" src={PPlogo} alt="logo" />
          <span className="ml-3 text-xl text-white">Pokemon Prime</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!Auth.loggedIn() ? (
            <>
              <a
                onClick={() => handlePageChange("Rules")}
                className="mr-5 hover:text-gray-900"
                href="#rules"
              >
                Rules
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
            </>
          ) : (
            <>
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
                onClick={() => handlePageChange("Profile")}
                className="mr-5 hover:text-gray-900"
                href="#profile"
              >
                Profile
              </a>
              <a
                onClick={() => handlePageChange("Logout")}
                className="mr-5 hover:text-gray-900"
                href="#login"
              >
                Logout
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
