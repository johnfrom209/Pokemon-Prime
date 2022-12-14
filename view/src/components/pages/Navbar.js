//navbar for home page should display
//rules, new challenge, sign in/logout

//navbar for rules page should display
//home, new challenge, sign in/logout

//navbar for new challenge page should display
//home, rules, sign in/logout

import React from "react";
import PPlogo from "../../images/PP.PNG";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="flex-row px-1 bg-blue-900 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
          <img className="w-10 h-10 mr-2" src={PPlogo} alt="logo" />
          <span className="ml-3 text-xl text-white">Pokemon Prime</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!Auth.loggedIn() ? (
            <>
              <Link
                to='/'
                className="mr-5 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to='/rules'
                className="mr-5 hover:text-gray-900"
              >
                Rules
              </Link>
              <Link
                to='/signup'
                className="mr-5 hover:text-gray-900"
              >
                Sign up
              </Link>
              <Link
                to='/login'
                className="mr-5 hover:text-gray-900"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to='/'
                className="mr-5 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to='/rules'
                className="mr-5 hover:text-gray-900"
              >
                Rules
              </Link>
              <Link
                to='/new-challenge'
                className="mr-5 hover:text-gray-900"
              >
                New Challenge
              </Link>
              {/* <Link
                to='/profile'
                className="mr-5 hover:text-gray-900"
              >
                Profile
              </Link> */}
              <a
                onClick={() => {logout()}}
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
