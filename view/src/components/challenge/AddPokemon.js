import React from 'react'

export default function AddPokemon({ pokemon }) {
    return (
        <div className='card-info h-fit w-full dragThis bg-indigo-300 rounded mb-4 text-sm'>
            <div className='py-3 px-5  relative space-x-3 pb-0 h-16'>
                <span className='italic mr-2'>

                    Name: {pokemon.name}
                </span>
                Species: {pokemon.species}
                Type: {pokemon.type}
                <img src={pokemon.sprite} alt={`Pokemon. Nicknamed ${pokemon.name}`} className="h-14 absolute right-10 top-0" />

            </div>

        </div>
    )
}
