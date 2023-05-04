import React from 'react'
import PokemonType from './PokemonType';
import { Link } from 'react-router-dom';

export default function PokemonDetail({ isOpen, onClose, pokemon }) {
    if (!isOpen) return null;
    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center scroll-hidden " >
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

            <div className="modal-content bg-blue-900 w-full h-3/4 md:max-w-md mx-auto p-4 rounded shadow-lg z-50 overflow-y-auto relative scrollbarHide ">
                <div className="modal-header text-lg font-bold text-gray-900 p-1">{pokemon.name}

                    <button onClick={onClose} className='absolute top-0 right-0 m-4 text-lg inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9'>X</button>
                </div>
                <div className="modal-body p-1 m-2">
                    {pokemon.species}
                    <img src={pokemon.sprite} alt={`Pokemon Nicknamed ${pokemon.name} `} className="h-8 xl:h-12 inline-flex justify-self-end pl-12 " />
                    <br />
                    {/* This is checking if the pokemon.type is an array. If it is we need to map the array, so that it sends one at a time to the react component. Else it calls on the react component with its single typing */}
                    {Array.isArray(pokemon.type) ? (
                        pokemon.type.map((type, index) => (
                            <PokemonType key={index} type={type} />
                        ))
                    ) : (
                        <PokemonType type={pokemon.type} />
                    )}
                    <br />
                    Weak:
                    {Array.isArray(pokemon.pokemonWeak) ? (
                        pokemon.pokemonWeak.map((type, index) => (
                            <PokemonType key={index} type={type} />
                        ))
                    ) : (
                        <PokemonType type={pokemon.type} />
                    )}
                    <br />

                    Resist:
                    {Array.isArray(pokemon.pokemonResist) ? (
                        pokemon.pokemonResist.map((type, index) => (
                            <PokemonType key={index} type={type} />
                        ))
                    ) : (
                        <PokemonType type={pokemon.type} />
                    )}
                    <br />
                    Link:
                    <a href={pokemon.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300"> Bulbapedia</a>
                    <br />

                    <div className="modal-footer absolute bottom-0 left-0 w-full">
                        <ul className="flex justify-center space-x-4 mb-4">
                            <li>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out h-9">
                                    RIP
                                </button>
                            </li>
                            <li>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out h-9">
                                    Evolve
                                </button>
                            </li>
                            <li>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out h-9">
                                    Undo
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}