import React, { useState } from 'react'
// import { Query, PokemonEnum } from '@favware/graphql-pokemon';
import { useMutation } from '@apollo/client';
import { Mutation_AddPlayer1Caught, Mutation_AddPokemon } from '../../utils/mutations';

import { uniqueNamesGenerator, adjectives, animals } from 'unique-names-generator';

export default function ModalAddPokemon({ openModal, onClose, setOpenModal, setPlayer1Caught, player1Caught, setSpriteList }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [addPokemon, setAddPokemon] = useState('');
    const [nickName, setNickName] = useState('');
    const [addPokemonToDB, { error }] = useMutation(Mutation_AddPokemon);
    const [catchingP1, { error2 }] = useMutation(Mutation_AddPlayer1Caught);

    const activeChallenge = localStorage.getItem('challengeId');


    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        let inputValue = target.value;
        inputValue = inputValue.toLowerCase();

        if (inputType === 'species') {
            setAddPokemon(inputValue);
        } else {
            setNickName(inputValue);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!addPokemon) {
            setErrorMessage('Please enter a Species!');
            return;
        }

        if (!nickName) {
            setErrorMessage('Please enter a nickname!');
            return;
        }

        //call api to get pokemon info
        // const temppokemon = await Query.getPokemon({ name: addPokemon });
        try {

            const pokemonData = await fetch('https://graphqlpokemon.favware.tech/v7', {
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
                    bulbapediaPage
                    evolutionLevel
                    evolutions {
                        species
                    }
                    flavorTexts {
                        flavor
                      }
                    types {
                        matchup {
                          attacking {
                            effectiveTypes
                          }
                          defending {
                            effectiveTypes
                          }
                        }
                        name
                      }
                }
            }
              `
                })
            });

            // console.log("This is PokemonData", pokemonData.status);

            if (pokemonData.status !== 400) {
                const { data } = await pokemonData.json();
                // console.log("This is data", data);
                let evo = "";
                // create an array of type names
                const typeNames = data.getPokemon.types.map((type) => type.name);
                let weakness = [];
                //iterate through the weakness array and create a new array of objects with the type name and the weakness
                if (data.getPokemon.types.length > 1) {
                    for (let i = 0; i < data.getPokemon.types.length; i++) {
                        weakness = weakness.concat(data.getPokemon.types[i].matchup.defending.effectiveTypes);
                    }
                } else {
                    weakness = data.getPokemon.types[0].matchup.defending.effectiveTypes;
                }
                //Getting the Resistant Types
                let resistant = [];
                if (data.getPokemon.types.length > 1) {
                    for (let i = 0; i < data.getPokemon.types.length; i++) {
                        resistant = resistant.concat(data.getPokemon.types[i].matchup.attacking.effectiveTypes);
                    }
                } else {
                    resistant = data.getPokemon.types[0].matchup.attacking.effectiveTypes;
                }
                //remove duplicates from the weakness array
                weakness = [...new Set(weakness)];
                //remove duplicates from the resistant array
                resistant = [...new Set(resistant)];

                //grab the evolution
                if (data.getPokemon.evolutions) {
                    evo = data.getPokemon.evolutions.map((evo) => evo.species);
                }
                // add pokemon to database
                let newId = await addPokemonToDB({
                    variables: {
                        name: nickName,
                        species: data.getPokemon.species,
                        evolution: evo,
                        sprite: data.getPokemon.sprite,
                        pokemonType: typeNames,
                        superEffective: resistant,
                        weakness: weakness,
                    }
                });

                //add pokemon to player's caught pokemon
                await catchingP1({
                    variables: {
                        challengeId: activeChallenge,
                        pokemonId: newId.data.addPokemon._id
                    }
                });

                localStorage.setItem('player1Caught', JSON.stringify([...player1Caught, {
                    id: newId.data.addPokemon._id,
                    name: nickName,
                    species: addPokemon,
                    type: typeNames,
                    sprite: data.getPokemon.sprite,
                    pokemonWeak: weakness,
                    pokemonResist: resistant,
                    link: data.getPokemon.bulbapediaPage
                }
                ]));

                setPlayer1Caught([...player1Caught, {
                    id: newId.data.addPokemon._id,
                    name: nickName,
                    species: addPokemon,
                    type: typeNames,
                    sprite: data.getPokemon.sprite,
                    pokemonWeak: weakness,
                    pokemonResist: resistant,
                    link: data.getPokemon.bulbapediaPage

                }]);
            }
            else {
                setErrorMessage('Species not found');
            }
        }
        catch (err) {
            console.log(err);
        }

        //I need the challenge id to add the pokemon to the player's caught pokemon



        setAddPokemon('');
        setNickName('');
        setErrorMessage('');
        setOpenModal(false);
        // window.location.reload();

    }

    //for random nickname generation
    // takes an object and returns a string
    const handleRandomName = (event) => {
        event.preventDefault();
        if (nickName) {
            setNickName('');
        }
        let randomName = uniqueNamesGenerator({ dictionaries: [adjectives, animals] });
        setNickName(randomName);
    }

    if (!openModal) return null
    return (

        <div onClick={onClose} className='w-full h-full z-40 fixed '>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className='modalContainer w-2/4 relative content-center bg-blue-900 rounded-xl shadow-lg mx-auto my-20 p-4'
            >
                <div>
                    <h1 className='text-blue-100 ml-5 text-4xl'>Add A Pokemon
                        <button onClick={onClose} className='absolute top-0 right-0 m-4 text-lg inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9'>X</button>
                    </h1>
                </div>

                {errorMessage && (
                    <div className='pt-5 absolute -bottom-10 left-20'>
                        <p className="error-text place-self-center text-blue-900 font-medium text-lg text-center">{errorMessage}</p>
                    </div>
                )}
                <div className='bg-blue-900 h-1/4 inset-x-0 bottom-0 my-2 mt-24 rounded relative'>
                    {/* <img src="https://play.pokemonshowdown.com/sprites/itemicons/ultra-ball.png" alt='Pokeball'></img> */}

                    {/* add pokemon */}

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
                            className='  px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                            onClick={handleRandomName}>
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
