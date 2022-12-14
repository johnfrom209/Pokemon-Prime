import React, { useState } from 'react'
import { Query, PokemonEnum } from '@favware/graphql-pokemon';
export default function ModalAddPokemon({ openModal, onClose, setOpenModal, setPlayer1Caught, player1Caught }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [addPokemon, setAddPokemon] = useState('');
    const [nickName, setNickName] = useState('');


    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and message
        if (inputType === 'species') {
            setAddPokemon(inputValue);
        } else {
            setNickName(inputValue);
        }
    }

    const handleFormSubmit = async (e) => {
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
        // const temppokemon = await Query.getPokemon({ name: addPokemon });
        // console.log(temppokemon);

        // interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
        //     data: Record<K, Omit<Query[K], '__typename'>>;
        // }
        // const pokemon = await
        fetch('https://graphqlpokemon.favware.tech/v7', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                {
                    getPokemon(pokemon: ${addPokemon} ) {
                        sprite
                        species
                    }
                }
                  `

            })
        })
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err))

        //add pokemon to player1Caught
        //https://graphqlpokemon.favware.tech/v7?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIq6EAUAJAA4QDWCcES6RACg0ywKJLwBCAJRFgAHSREiAcwQpOjZkgp1FLNrS5KR4yVKIBnGngCWKBBP2GaCKCYQHL%2BlARsHRTq0gCGiT-rhvFCgACxgaDz0rKTAEADNkMBMkaUjo6PiEqBQTADcEABVXB38rAF9SogqoqqdqspAyoA

        //setAddPokemon('');

        // setPlayer1Caught([...player1Caught, {
        //     id: player1Caught.length + 1,
        //     species: addPokemon, nickname: nickName, type: ['fire'],
        //     sprite: "https://play.pokemonshowdown.com/sprites/ani/charmander.gif"
        // }]);

        setAddPokemon('');
        setNickName('');
        setErrorMessage('');

    }

    if (!openModal) return null
    return (
        
        <div onClick={onClose} className='w-full h-full z-40 fixed bg-blue-400 '>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className='modalContainer w-2/4 relative content-center bg-blue-900 rounded-xl shadow-lg mx-auto my-20 p-4'
            >
                    <div>
                        <h1 className='text-blue-100 ml-5 text-4xl'>Add A Pokemon
                        <button onClick={onClose} className='ml-80 text-lg inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9'>X</button>
                        </h1>
                    </div>
                  
                    
                <div className='bg-blue-900 h-1/4 inset-x-0 bottom-0 my-2 mt-24 rounded relative'>
                    {/* <img src="https://play.pokemonshowdown.com/sprites/itemicons/ultra-ball.png" alt='Pokeball'></img> */}

                    {/* add pokemon */}
                    {errorMessage && (
                        <div className='pt-5 absolute -bottom-10 left-20'>
                            <p className="error-text place-self-center text-white text-center">{errorMessage}</p>
                        </div>
                    )}
                    <form className='addPokemon text-xs grid grid-cols-2 gap-4 place-content-around'>

                        <input
                            type='text'
                            defaultValue={nickName}
                            name='nickname'
                            onChange={handleInputChange}
                            placeholder='Nickname'
                            className='px-6 py-2 border-2 border-blue-600 text-blue-1000 font-medium text-lg leading-tight uppercase rounded   focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        />
                        <input
                            type='text'
                            defaultValue={addPokemon}
                            onChange={handleInputChange}
                            name='species'
                            placeholder='Species'
                            className='px-6 py-2 border-2 border-blue-600 text-blue-1000 font-medium text-lg leading-tight uppercase rounded   focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        />
                        <button
                            className='  px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                            {/* put dice? to indicate a random name generation */}
                            Random</button>
                        <button
                            className='px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '
                            onClick={handleFormSubmit}
                        >Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
