// profile page 
import React from "react";
// import {useParams} from "react-router-dom";
import trainer from "../../images/Brendan.png";
import textbg from "../../images/pokemon-text.png";
import trainerF from "../../images/May.png";
import Auth from "../../utils/auth";
// import { useQuery } from "@apollo/client";
// import {QUERY_USER}  from "../../utils/queries";

const Profile = () => {
  const userData = Auth.getProfile().data.username;

  console.log(userData)
//   const {username: userParam} = useParams();
//   const {data} = useQuery(userParam ? QUERY_USER : QUERY_USER,{
//     variables: {username: userParam}
//   });
// if(Auth.getProfile().data.username === userParam){
//   console.log("true")
// }
  // const user = data?.username || {};
  // console.log(user);
    return (
      
      
        <div className="bg-white-50 w-screen flex flex-col justify-center items-center"  style={{ backgroundImage: `url(${textbg})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center", backgroundColor:"white"}}>
        <div className=" w-full lg:max-w-full lg:flex" >
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-noneoverflow-hidden" src={trainerF} alt="Pokemon Trainer" 
            />
        
          <div className="flex items-center justify-between leading-normal w-full">
            <div className="w-full">
                
              <div className="text-gray-900 font-bold text-xl mb-2 text-center ">Trainer Card</div>
              <h1 className="text-gray-700 text-center text-base"> Here Are Your Stats For Your Challenge:</h1>
                <h2 className="text-gray-700 text-center text-base">Pokemon Caught:</h2>
                <h2 className="text-gray-700 text-center text-base">Wins:</h2>
                <h2 className="text-gray-700 text-center text-base">Losses:</h2>
                <h2 className= "text-gray-700 text-center text-base">Username:{`${userData}`}</h2>
                <h2 className= "text-gray-700 text-center text-base">Date Started:</h2>

            </div>
          </div>   
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-noneoverflow-hidden" src={trainer} alt="Pokemon Trainer"
            />    
        </div>
      </div>
    )
};
export default Profile;