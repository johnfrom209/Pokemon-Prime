import React from 'react'

export default function AddPokemon({ pokemon }) {
    return (
        <div className='h-fit w-full dragThis bg-indigo-300 rounded'>
            <div className='p-5'>
                Name: {pokemon.name} <br />
                Species: {pokemon.species} <br />
                Type: {pokemon.type}

            </div>
            <div className='relative'>
                <img src={pokemon.sprite} alt={`Pokemon. Nicknamed ${pokemon.name}`} className="h-1/5 " />

            </div>
        </div>
    )
}
