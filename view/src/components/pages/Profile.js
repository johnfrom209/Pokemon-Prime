// profile page 
import React from "react";
// import {useParams} from "react-router-dom";
import trainer from "../../images/Brendan.png";
import textbg from "../../images/pokemon-text.png";
import trainerF from "../../images/May.png";
import Auth from "../../utils/auth";

const Profile = () => {
  const userData = Auth.getProfile().data;
  
  console.log(userData)
//   let p1name = "Player 1";
// let pokemonArray = localStorage.getItem("player1Caught", JSON.stringify());
let spriteList = JSON.parse(localStorage.getItem("player1Caught",)) ?? [];



// const [player1Caught, setPlayer1Caught] = useState(spriteList);
// const renderPlayer1Caught = player1Caught.map((pokemon) => {
//   return <AddPokemon key={pokemon.id} pokemon={pokemon} />
// })


  return (
      
      
        <div className="bg-white-50 w-screen flex flex-col justify-center items-center"  style={{ backgroundImage: `url(${textbg})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center", backgroundColor:"white"}}>
        <div className=" w-full lg:max-w-full lg:flex" >
          <img className="h-30 md lg:w-48 flex bg-cover rounded-t lg:rounded-t-noneoverflow-hidden" src={trainerF} alt="Pokemon Trainer" 
            />
        
          <div className="flex items-center justify-between leading-normal w-full">
            <div className="w-full">
                
              <div className="text-gray-900 font-bold text-xl mb-2 text-center ">Trainer Card</div>
              <h1 className="text-gray-700 text-center text-base"> Here Are Your Stats For Your Challenge:</h1>
                <h2 className="text-gray-700 text-center text-base">Pokemon Caught:{spriteList.length}</h2>
                <h2 className="text-gray-700 text-center text-base">Wins:{userData.wins}</h2>
                <h2 className="text-gray-700 text-center text-base">Losses:{userData.losses}</h2>
                <h2 className= "text-gray-700 text-center text-base">Username:{`${userData.username}`}</h2>
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