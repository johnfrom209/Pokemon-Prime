import React from "react";
import PPlogo from "../../images/PP.PNG";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

export default function LandingPage() {
  const profile = Auth.getProfile();
  console.log(profile || "no profile");
  return (
    <div className="m-5 h-full mb-16 self-center w-full max-w-sm p-4 bg-blue-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={PPlogo} alt="logo" />

      <div className=" p-5">
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
          Welcome to Pokemon Prime
        </p>
        {Auth.loggedIn() ? (
          <>
            <Link
              to="/new-challenge"
              className="ml-10 inline-flex px-6 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Start Nuzlocke
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="ml-24 inlineflex px-6 pl-6 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
