import React from "react";
//rules page
export default function Rules() {
  return (
    <div className="flex shrink  m-auto h-screen bg-sapp-100">
      <div className="bg-gray-800 h-fit text-sapp-100 font-semibold w-fit rounded-lg shadow-md text-xl font-serif p-8 xl:text-xl md:mt-16 ">
        <h1 className="block text-2xl text-red-600 p-3">Rules</h1>
        <ul className="leading-relaxed block">
          <li>
            1. You are only able to catch the first wild Pokemon encountered
            in each area
          </li>
          <li>2. You must name each Pokemon you catch</li>
          <li>3. If your Pokemon faints it's considered "dead"</li>
          <li>
            4. Your Pokemon can not be above the gym leader's Pokemon level
          </li>
          <li>5. You can not have duplicate species of Pokemon</li>
        </ul>
      </div>
    </div>
  );
}
