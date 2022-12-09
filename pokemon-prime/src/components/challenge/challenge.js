//outline for nuzlocke components
// import oneparty from "./1party";
// import twoparty from "./2party";
// import battleparty from "./battleparty";
// import graveyard from "./graveyard";
// import newpokemon from "./newpokemon";
// import quickref from "./quickref";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';


import React, { useEffect, useState } from 'react';
import dragula from 'dragula';
import AddPokemon from './AddPokemon';

var drake = dragula([document.querySelector('.player1Caught'), document.querySelector('.battleparty')], {
    copy: false, revertOnSpill: true, isContainer: function (el) {
        return el.classList.contains('dragula-container');
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
    const [graveyard, setGraveyard] = useState([]);
    const [player1Caught, setPlayer1Caught] = useState(spriteList);
    const [addPokemon, setAddPokemon] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // useEffect(() => {
    //     console.log('battleparty', battleparty);
    // }, [battleparty, graveyard, player1Caught]);

    const renderPlayer1Caught = player1Caught.map((pokemon) => {
        return <AddPokemon key={pokemon.id} pokemon={pokemon} />
    })
    //I don't feel like I need this. I can just use the pokemon name from the input
    // const handleInputChange = (e) => {
    //     const { value } = e.target;
    //     //what is value here?
    //     console.log(value);

    //     const pokemonName = value.trim();

    //     if (pokemonName.length) {
    //         // setAddPokemon(pokemonName);
    //     } else {
    //         setAddPokemon('');
    //     }
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!addPokemon) {
            setErrorMessage('Please enter a Pokemon name');
            return;
        }

        //call api to get pokemon info
        //add pokemon to player1Caught
        //setAddPokemon('');

        setAddPokemon('');
        setErrorMessage('');

    }

    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 h-screen bg-indigo-500'>
                <div className='p-2'>
                    <h2 className='text-lg'>Player 1</h2>
                    <h4 >Alpha Sapphire</h4>
                </div>
                {/* added class 'player1Caught' just for identification. it does nothing */}
                <div className='bg-indigo-800 h-4/5 m-5 rounded' >
                    {/* this is the contain for the Pokemon they caught */}
                    <div className='player1Caught dragula-container h-full w-full overflow-auto'>
                        {renderPlayer1Caught}
                    </div>
                </div>
            </div>
            <div className='h-screen bg-gray-500 '>
                <div className='bg-gray-800 h-1/4 my-2 mt-24 rounded relative'>
                    {/* add pokemon */}
                    {errorMessage && (
                        <div className='pt-5'>
                            <p className="error-text text-white text-center">{errorMessage}</p>
                        </div>
                    )}
                    <form className='absolute bottom-0 right-20'>
                        <input
                            type='text'
                            placeholder='Pokemon Name'
                            className='w-1/2 p-2 rounded'
                        />
                        <button
                            className='bg-gray-300 p-2 m-2 rounded'
                            onClick={handleFormSubmit}
                        >Add Pokemon</button>
                    </form>

                </div>

                <div className='bg-gray-800 h-1/4 my- rounded2'>
                    {/* Battle Party */}
                    <div className='battleparty dragula-container h-full w-full grid grid-cols-6 '>

                    </div>

                </div>
                <div className='bg-gray-800 h-1/4 my-2 rounded'>
                    {/* Quick Ref Area */}
                </div>

            </div>
            <div className='h-screen bg-red-500'>
                <div className='p-2 text-right'>
                    <h2 className='text-lg'>Player 2</h2>
                    <h4 >Omega Ruby</h4>
                </div>
                <div className='bg-red-800 h-4/5 m-5 rounded'>
                    {/* this is the contain for the Pokemon they caught */}

                </div>
            </div>

        </div >
    )
}
