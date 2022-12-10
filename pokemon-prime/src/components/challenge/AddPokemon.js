import React from 'react'

export default function AddPokemon({ pokemon }) {
    return (
        <div className='h-fit w-full dragThis bg-indigo-300 rounded mb-2 text-sm'>
            <div className='p-5 flex space-x-3 pb-0'>
                <span className='italic mr-2'>

                    Name: {pokemon.name}
                </span>
                Species: {pokemon.species}
                Type: {pokemon.type}

                <img src={pokemon.sprite} alt={`Pokemon. Nicknamed ${pokemon.name}`} className="h-14 " />
            </div>
        </div>
    )
}
