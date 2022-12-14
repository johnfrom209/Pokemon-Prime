import React, { useState } from 'react'
import { Query, PokemonEnum } from '@favware/graphql-pokemon';
import { useMutation } from '@apollo/client';
import { Mutation_AddPlayer1Caught, Mutation_AddPokemon } from '../../utils/mutations';


export default function ModalAddPokemon({ openModal, onClose, setOpenModal, setPlayer1Caught, player1Caught }) {

    const [errorMessage, setErrorMessage] = useState('');
    const [addPokemon, setAddPokemon] = useState('');
    const [nickName, setNickName] = useState('');
    const [addPokemonToDB, { error }] = useMutation(Mutation_AddPokemon);


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
                    evolutions {
                        species
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
            // console.log(data.getPokemon.types[0].matchup.attacking.effectiveTypes);

            if (pokemonData.status !== 400) {
                const { data } = await pokemonData.json();

                let evo = "";
                console.log(data.getPokemon);
                if (data.getPokemon.evolutions) {
                    evo = data.getPokemon.evolutions[0].species;
                }
                // add pokemon to database
                let newId = await addPokemonToDB({
                    variables: {
                        name: nickName,
                        species: data.getPokemon.species,
                        evolution: evo,
                        sprite: data.getPokemon.sprite,
                        pokemonType: data.getPokemon.types[0].name,
                        superEffective: data.getPokemon.types[0].matchup.attacking.effectiveTypes,
                        weakness: data.getPokemon.types[0].matchup.defending.effectiveTypes,
                    }
                });
                // console.log("ID: ", newId);
                console.log("____ID: ", newId.data.addPokemon._id);

                //add pokemon to player's caught pokemon
                await Mutation_AddPlayer1Caught({
                    variables: {

                        pokemonId: newId.data.addPokemon._id
                    }
                });
            }
            else {
                setErrorMessage('Species not found');
            }
        }
        catch (err) {
            console.log(err);
        }



        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data)
        //add pokemon to database
        // addPokemonToDB({
        //     variables: {
        //         name: nickName,
        //         species: data.species,
        //         type: data.types,
        //         superEffective: data.types.matchup.attacking.effectiveTypes,
        //         weakness: data.types.matchup.defending.effectiveTypes,
        //         sprite: data.sprite,
        //         evolution: data.evolution
        //     })

        // })
        // .catch((err) => console.log(err))

        //I need the challenge id to add the pokemon to the player's caught pokemon
        //hardcoding for now
        const challengeId = '6398c91a249f9066bb7d99d2';
        //add pokemon to player1Caught

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
        <div onClick={onClose} className='w-full h-full z-40 fixed bg-gray-500 '>
            <div
                onClick={(e) => {
                    e.stopPropagation()
                }}
                className='modalContainer w-2/4 relative '
            >

                <div className='bg-gray-800 h-1/4 inset-x-0 bottom-0 my-2 mt-24 rounded relative'>
                    {/* <img src="https://play.pokemonshowdown.com/sprites/itemicons/ultra-ball.png" alt='Pokeball'></img> */}

                    <p onClick={onClose} className='closeBtn mt-2 absolute right-3 bg-white rounded-xl top-0'>X</p>

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
                            className='w-2/6 p-2 text-center block mt-2 m-auto rounded'
                        />
                        <input
                            type='text'
                            defaultValue={addPokemon}
                            onChange={handleInputChange}
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
            </div>
        </div>
    )
}
