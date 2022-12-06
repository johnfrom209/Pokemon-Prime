//outline for nuzlocke components
// import oneparty from "./1party";
// import twoparty from "./2party";
// import battleparty from "./battleparty";
// import graveyard from "./graveyard";
// import newpokemon from "./newpokemon";
// import quickref from "./quickref";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import smeargle from '../../images/pokestarsmeargle.png';
import SpriteDrag from './SpriteDrag';
import { useDrop } from 'react-dnd';

import React, { useState } from 'react';

// this is temp
const spriteList = [
    {
        id: 1,
        name: 'smeargle',
        sprite: "https://play.pokemonshowdown.com/sprites/ani/smeargle.gif"
    }, {
        id: 2,
        name: 'charizard',
        sprite: "https://play.pokemonshowdown.com/sprites/ani/charizard.gif"
    }
]

export default function Challenge() {
    const [tempText, setTempTest] = useState(spriteList)
    const [player1Caught, setPlayer1Caught] = useState([]);
    // array for battle party
    const [battleparty, setBattleparty] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "sprite",
        // identifies the item getting added to the battleparty
        drop: (item) => addSpriteToBattle(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    // this is how you add to battle party
    // need to limit to 6
    // need to splice out of the other array
    const addSpriteToBattle = (pokemonId) => {
        const battleTemp = spriteList.filter((pokemon) => pokemonId === pokemon.id);

        setBattleparty((pokemon) => [...pokemon, battleTemp[0]])

        let index;
        // find by id then splice that index
        for (let i = 0; i < spriteList.length; i++) {
            if (spriteList[i].id === pokemonId) {
                index = i;
                break
            }
        }
        console.log("This is a result: ", index);
        spriteList.splice(index, 1)
        setTempTest(spriteList)

    }

    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 h-screen bg-indigo-500'>
                <div className='p-2'>
                    <h2 className='text-lg'>Player 1</h2>
                    <h4 >Alpha Sapphire</h4>
                </div>
                {/* added class 'player1Caught' just for identification. it does nothing */}
                <div className='player1Caught bg-indigo-800 h-4/5 m-5 rounded' ref={drop}>
                    {/* this is the contain for the Pokemon they caught */}
                    {/* this calls on the SpriteDrag component and does magic to add the drag-ability */}
                    {/* {spriteList.map((sprite) => {
                        return <  SpriteDrag sprite={sprite.sprite} id={sprite.id} />
                    })} */}

                </div>
            </div>
            <div className='col-span-1 h-screen bg-gray-500 '>
                <div className='bg-gray-800 h-1/4 my-2 mt-24 rounded'>
                    {/* add pokemon */}
                    {spriteList.map((sprite) => {
                        return <  SpriteDrag sprite={sprite.sprite} id={sprite.id} />
                    })}
                </div>
                <div className='bg-gray-800 h-1/4 my- rounded2' ref={drop}>
                    {/* Battle Party */}
                    {battleparty.map((sprite) => {
                        return <  SpriteDrag sprite={sprite.sprite} id={sprite.id} />
                    })}
                </div>
                <div className='bg-gray-800 h-1/4 my-2 rounded'>
                    {/* Quick Ref Area */}
                </div>

            </div>
            <div className='col-span-1 h-screen bg-red-500'>
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
