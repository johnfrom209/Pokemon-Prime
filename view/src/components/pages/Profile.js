// profile page 
import React from "react";



export default function Profile() {
    return (
        // card for profile 
        <div className="max-w-md w-full lg:flex rounded overflow-hidden shadow-lg">
            <img className="w-full md:flex" src="https:tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
            <div className="px-2 py-0 bg-blue-300">
                <div className="font-bold text-xl mb-2">{}</div>
                <p className="text-white-50 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>

    );
};