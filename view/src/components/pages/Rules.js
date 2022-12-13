import React from "react";
//rules page
export default function Rules() {
  return (
    <div className="h-screen bg-blue-400">
      <div className="flex justify-center place-content-center bg-blue-400 text-blue-900  text-xl font-serif">
        <h1 className="text-2xl text-red-600 pb-8">Rules</h1>
        <div className="pt-8">
          <ul>
            <li>
              1. You are only able to catch the first wild Pokemon encountered
              in each area
            </li>
            <li>2. you must name each Pokemon you catch</li>
            <li>3. If your Pokemon faints it's considered "dead"</li>
            <li>
              4. Your Pokemon can not be above the gym leader's Pokemon level
            </li>
            <li>5. You can not have duplicate species of Pokemon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
