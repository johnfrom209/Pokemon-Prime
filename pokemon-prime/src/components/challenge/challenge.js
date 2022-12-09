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
    const [nickName, setNickName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // useEffect(() => {
    //     console.log('battleparty', battleparty);
    // }, [battleparty, graveyard, player1Caught]);

    const renderPlayer1Caught = player1Caught.map((pokemon) => {
        return <AddPokemon key={pokemon.id} pokemon={pokemon} />
    })

    // const handleInputChange = (e) => {
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value.trim();


    //     if (inputType === 'nickname') {
    //         //just if its not empty
    //         if (!inputValue) {
    //             setErrorMessage('Please enter a nickname');
    //             return;
    //         }
    //     } else if (inputType === 'species') {
    //         //just if its not empty
    //         if (!inputValue) {
    //             setErrorMessage('Please enter a Species');
    //             return;
    //         }
    //     } else {
    //         setErrorMessage(inputValue);
    //     }
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!addPokemon) {
            setErrorMessage('Please enter a Species');
            return;
        }

        if (!nickName) {
            setErrorMessage('Please enter a nickname');
            return;
        }

        //call api to get pokemon info
        //add pokemon to player1Caught
        //setAddPokemon('');

        setAddPokemon('');
        setNickName('');
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
                        <div className='pt-5 absolute -mt-12 ml-32 top-0'>
                            <p className="error-text text-white text-center">{errorMessage}</p>
                        </div>
                    )}
                    <form className='addPokemon text-xs grid grid-cols-2 gap-4 place-content-around'>

                        <input
                            type='text'
                            defaultValue={nickName}
                            name='nickname'
                            placeholder='Nickname'
                            className='w-2/6 p-2 text-center block mt-2 m-auto rounded'
                        />
                        <input
                            type='text'
                            defaultValue={addPokemon}
                            name='species'
                            placeholder='Species'
                            className='w-2/6 p-2 block m-auto text-center rounded'
                        />
                        <button
                            className='bg-gray-300 p-2 rounded w-2/6 place-self-center'>
                            {/* put dice? to indicate a random name generation */}
                            Random</button>
                        <button
                            className='bg-gray-300 block place-self-center w-2/6 m-auto p-2 m-2 rounded '
                            onClick={handleFormSubmit}
                        >Add</button>
                    </form>

                </div>

                <div className='bg-gray-800 h-1/4 rounded'>
                    {/* Battle Party */}
                    <div className='battleparty dragula-container h-full w-full grid grid-cols-6 gap-4 '>
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
