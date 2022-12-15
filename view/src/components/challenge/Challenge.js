//outline for nuzlocke components
// import oneparty from "./1party";
// import twoparty from "./2party";
// import battleparty from "./battleparty";
// import graveyard from "./graveyard";
// import newpokemon from "./newpokemon";
// import quickref from "./quickref";

import React, { useEffect, useState } from 'react';
import dragula from 'dragula';
import AddPokemon from './AddPokemon';
import Modal from './ModalAddPokemon';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { Query_Challenges } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { Mutation_AddChallenge } from '../../utils/mutations';

var drake = dragula([document.querySelector('.player1Caught'), document.querySelector('.battleparty')], {
    copy: false, revertOnSpill: true, isContainer: function (el) {
        return el.classList.contains('dragula-container');
    }
});


// this is temp
let pokemonArray = localStorage.getItem('player1Caught', JSON.stringify());
console.log(pokemonArray);
//what is this doing?
//the ? is a ternary operator
//the ?? is a nullish coalescing operator
//the ?? operator returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let spriteList = JSON.parse(localStorage.getItem('player1Caught')) ?? [];
let p1name = "Player 1"



export default function Challenge() {

    const [addChallenge, { error }] = useMutation(Mutation_AddChallenge);
    const addPlayerChallenge = () => {
        const playerToken = Auth.loggedIn() ? Auth.getProfile() : null;

        p1name = playerToken.data.username;

        // console.log('playerProfile', playerToken.data);

        //mutate a new challenge with player id
        let gameId = "639a814037441ad6b10cdff6"

        console.log("starting addChallenge");
        addChallenge({
            variables: {
                game: gameId,
                player1: playerToken.data._id
            }
        }).then((res) => {
            console.log('res', res);
            const challengeId = res.data.addChallenge._id;
            localStorage.setItem('challengeId', challengeId);
            // return res;
        }).catch((err) => {
            console.log('err', err);
            // return err;
        });
    }

    useEffect(() => {
        addPlayerChallenge();
    }, []);


    // const [battleparty, setBattleparty] = useState([]);
    // const [graveyard, setGraveyard] = useState([]);

    const [player1Caught, setPlayer1Caught] = useState(spriteList);
    const [openModal, setOpenModal] = useState(false);

    const renderPlayer1Caught = player1Caught.map((pokemon) => {
        return <AddPokemon key={pokemon.id} pokemon={pokemon} />
    })

    return (
        <div className='grid grid-cols-3'>

            <Modal openModal={openModal} onClose={() => setOpenModal(false)} setOpenModal={setOpenModal} setPlayer1Caught={setPlayer1Caught} player1Caught={player1Caught} setSpriteList={spriteList} />
            <div className='col-span-1 h-screen bg-indigo-500'>
                <div className='p-2 ml-5 pl-0'>
                    <h2 className='text-lg'>{p1name}</h2>
                    <h4 >Alpha Sapphire</h4>
                </div>
                {/* added class 'player1Caught' just for identification. it does nothing */}
                <div className='bg-indigo-800 h-4/5 m-5 rounded' >
                    {/* this is the contain for the Pokemon they caught */}


                    <button onClick={() => setOpenModal(true)} className='addPokemonButton bg-indigo-500 hover:bg-indigo-700 w-full border text-white font-bold py-2 px-4 rounded'>Add Pokemon</button>
                    <div className='player1Caught dragula-container h-full w-full overflow-auto'>
                        {renderPlayer1Caught}
                    </div>
                </div>
            </div>
            <div className='h-screen bg-gray-500 '>

                <div id='drop-battleparty' className='bg-gray-800 mt-24 h-2/5 rounded'>
                    {/* Battle Party */}
                    <div className='battleparty dragula-container h-full w-full grid grid-cols-6 gap-4 '>
                    </div>

                </div>
                <div className='bg-gray-800 h-1/4 my-2 rounded'>
                    {/* Quick Ref Area */}
                </div>
            </div>
            <div className='h-screen bg-red-500'>
                <div className='p-2 mr-5 pr-0 text-right'>
                    <h2 className='text-lg'>Player 2</h2>
                    <h4 >Omega Ruby</h4>
                </div>
                <div className='bg-red-800 h-4/5 m-5 rounded'>
                    {/* this is the contain for the Pokemon they caught */}
                    <button className='addPokemonButton bg-indigo-500 hover:bg-indigo-700 w-full border text-white font-bold py-2 px-4 rounded'>Add Pokemon</button>
                </div>
            </div>

        </div >
    )
}
