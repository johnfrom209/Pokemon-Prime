//outline for nuzlocke components
// import oneparty from "./1party";
// import twoparty from "./2party";
// import battleparty from "./battleparty";
// import graveyard from "./graveyard";
// import newpokemon from "./newpokemon";
// import quickref from "./quickref";

import React from 'react';

export default function challenge() {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1 h-screen bg-indigo-500'>
                <div className='p-2'>
                    <h2 className='text-lg'>Player 1</h2>
                    <h4 >Alpha Sapphire</h4>
                </div>
                <div className='bg-indigo-800 h-4/5 m-5 rounded'>
                    {/* this is the contain for the Pokemon they caught */}

                </div>
            </div>
            <div className='col-span-1 h-screen bg-gray-500 '>
                <div className='bg-gray-800 h-1/4 my-2 mt-24 rounded'>
                    {/* add pokemon */}
                </div>
                <div className='bg-gray-800 h-1/4 my- rounded2'>
                    {/* Battle Party */}
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

        </div>
    )
}
