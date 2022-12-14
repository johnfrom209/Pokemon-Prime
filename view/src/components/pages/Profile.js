// profile page 
import React from "react";

import trainer from "../../images/Brendan.png";
import textbg from "../../images/pokemon-text.png";
import trainerF from "../../images/May.png";
export default function Profile() {
    return (
   
      
        <div className="bg-white-50 w-screen flex flex-col justify-center items-center"  style={{ backgroundImage: `url(${textbg})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center", backgroundColor:"white"}}>
        <div className=" w-full lg:max-w-full lg:flex" >
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-noneoverflow-hidden" src={trainerF} alt="Pokemon Trainer" 
            />
        
          <div className="flex items-center justify-between leading-normal w-full">
            <div className="w-full">
                
              <div className="text-gray-900 font-bold text-xl mb-2 text-center ">Trainer Card</div>
              <h1 className="text-gray-700 text-center text-base"> Here Are Your Stats For Your Challenge:</h1>
                <p className="text-gray-700 text-center text-base">Pokemon Caught:</p>
                <p className="text-gray-700 text-center text-base">Wins:</p>
                <p className="text-gray-700 text-center text-base">Losses:</p>
                <p className= "text-gray-700 text-center text-base">Username:</p>
                <p className= "text-gray-700 text-center text-base">Date Started:</p>

            </div>
          </div>   
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-noneoverflow-hidden" src={trainer} alt="Pokemon Trainer"
            />    
        </div>
      </div>
    )
};