// profile page 
import React from "react";
import trainer from "../../images/Brendan.png";


export default function Profile() {
    return (
        // card for profile displaying username, and trainer card
       
        // <div className= "h-screen my-20 flex justify-center  "> 
        // <div className="w-full lg:max-w-full lg:flex items-center rounded overflow-hidden shadow-lg">
        //     <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-1 text-center overflow-hidden">
        //         <div className="font-bold text-xl mb-2 flex text-center">Trainer-Card</div>
        //         <ul className="text-gray-700 text-base">
        //            <li>Username:</li> 
        //              <li>Pokemon Caught:</li>
        //              <li>Wins:</li>
        //                 <li>Losses:</li>
                        

        //         </ul>
        //     </div>
        //     <div className="px-6 py-4">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
        //     </div>
        // </div>
        // </div>
        
      
        
        <div className=" w-full lg:max-w-full lg:flex">
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={trainer} alt="Pokemon Trainer" 
            />
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex items-center justify-between leading-normal w-full">
            <div className="w-full">
              <div className="text-gray-900 font-bold text-xl mb-2 text-center">Trainer Card</div>
              <h1 className="text-gray-700 text-center text-base"> Here Are Your Stats For Your Challenge:</h1>
                <p className="text-gray-700 text-center text-base">Pokemon Caught:</p>
                <p className="text-gray-700 text-center text-base">Wins:</p>
                <p className="text-gray-700 text-center text-base">Losses:</p>
                <p className= "text-gray-700 text-center text-base">Username:</p>
                <p className= "text-gray-700 text-center text-base">Date Started:</p>

            </div>
            {/* <div className="flex items-center">
              <src className="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer"></src>
              <div className="text-sm">
                <h2 className="text-gray-900 leading-none">Username:</h2>
                <p className="text-gray-600">Date Started:</p>
              </div>
            </div> */}
          </div>
       
        </div>
      
    )
    //     <div className="max-w-md w-full lg:flex rounded overflow-hidden shadow-lg">
    //         <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
    //     </div>
             
    //         <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //             <div className="font-bold text-xl mb-2">Trainer-Card</div>
    //             <p className="text-gray-700 text-base tex-sm mb-6">
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //             </p>
    //             </div>
    //     </div>

    // );
};