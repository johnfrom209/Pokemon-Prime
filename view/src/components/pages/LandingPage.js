import React from "react";
import PPlogo from "../../images/PP.PNG";
import newChallenge from "../challenge/Challenge";

export default function LandingPage() {
  return (
    <div className="self-center w-full max-w-sm p-4 bg-blue-400 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={PPlogo} alt="logo" />

      <div className=" p-5">
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
          Welcome to Pokemon Prime
        </p>

        <button
          href={newChallenge}
          className="ml-10 inline-flex px-6 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Nuzlocke
        </button>
      </div>
    </div>
  );
}
