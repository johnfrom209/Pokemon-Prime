import React, { useState } from 'react'
// import Pokeball from '../../images/pokeball.png'

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

        setPlayer1Caught([...player1Caught, {
            id: player1Caught.length + 1,
            species: addPokemon, nickname: nickName, type: ['fire'],
            sprite: "https://play.pokemonshowdown.com/sprites/ani/charmander.gif"
        }]);

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
