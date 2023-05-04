import React from 'react'

export default function PokemonDetail({ isOpen, onClose, pokemon }) {
    if (!isOpen) return null;
    console.log('pokemonnnnnnnnnnnnnnn', pokemon);
    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-content bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-header text-lg font-bold text-gray-900">{pokemon.name}</div>
                <div className="modal-body text-gray-700">
                    {/* Add detailed information here */}</div>
                <div className="modal-footer">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}




