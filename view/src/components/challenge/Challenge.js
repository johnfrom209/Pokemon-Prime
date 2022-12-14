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

var drake = dragula([document.querySelector('.player1Caught'), document.querySelector('.battleparty')], {
    copy: false, revertOnSpill: true, isContainer: function (el) {
        return el.classList.contains('dragula-container');
    },

    shadow: function (el, source) {
        return el.cloneNode(true);
    }

});


// this is temp
const spriteList = [
    {
        id: 1,
        name: 'VanSmearg',
        species: 'smeargle',
        sprite: "https://play.pokemonshowdown.com/sprites/ani/smeargle.gif",
        type: 'normal',
    }, {
        id: 2,
        name: 'Oven',
        species: 'charizard',
        sprite: "https://play.pokemonshowdown.com/sprites/ani/charizard.gif",
        type: ['fire', 'flying']
    }
]



export default function Challenge() {

    const [battleparty, setBattleparty] = useState([]);
    // const [graveyard, setGraveyard] = useState([]);
    const [player1Caught, setPlayer1Caught] = useState(spriteList);
    const [openModal, setOpenModal] = useState(false);

    // useEffect(() => {
    //     console.log('battleparty', battleparty);
    // }, [battleparty, graveyard, player1Caught]);

    const renderPlayer1Caught = player1Caught.map((pokemon) => {
        return <AddPokemon key={pokemon.id} pokemon={pokemon} />
    })

    return (
        <div className='grid grid-cols-3'>

            <Modal openModal={openModal} onClose={() => setOpenModal(false)} setOpenModal={setOpenModal} setPlayer1Caught={setPlayer1Caught} player1Caught={player1Caught} />
            <div className='col-span-1 h-screen bg-indigo-500'>
                <div className='p-2 ml-5 pl-0'>
                    <h2 className='text-lg'>Player 1</h2>
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
