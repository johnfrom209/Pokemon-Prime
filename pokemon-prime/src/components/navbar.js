//navbar for home page should display
//rules, new challenge, sign in/logout

//navbar for rules page should display
//home, new challenge, sign in/logout

//navbar for new challenge page should display
//home, rules, sign in/logout

import React from "react";
import Login from "./Login";
import signin from "./SignUp";
import Rules from "./Rules";
import NewChallenge from "./challenge/Challenge";

function Navbar ({ currentPage, setCurrentPage}) {
    return (
        <header className="flex-row px-1">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <a onClick={() => setCurrentPage("Home")} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Pokemon Prime</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a onClick={() => setCurrentPage("Rules")} className="mr-5 hover:text-gray-900">Rules</a>
                    <a onClick={() => setCurrentPage("New Challenge")} className="mr-5 hover:text-gray-900">New Challenge</a>
                    <a onClick={() => setCurrentPage("Sign In")} className="mr-5 hover:text-gray-900">Sign In</a>
                    <a onClick={() => setCurrentPage("Logout")} className="mr-5 hover:text-gray-900">logout</a>
                </nav>
            </div>
        </header>

    )
}
export default Navbar;