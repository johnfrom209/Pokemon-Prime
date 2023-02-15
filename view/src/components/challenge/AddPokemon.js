import React from 'react'

export default function AddPokemon({ pokemon }) {
    return (
        <div className='card-infodragThis flex-1 flex-row bg-sapp-400 rounded mb-4 text-md xl:w-10 xl:h-40 ml-1'>
            <div className='py-3 px-5 relative space-x-3 pb-0 h-16 '>
                <span className='italic mr-2 text-clip'>
                    {pokemon.name}
                </span>
                <img src={pokemon.sprite} alt={`Pokemon. Nicknamed ${pokemon.name} `} className="h-14" />
                {pokemon.species}
                <br />
                {pokemon.type}

            </div>

        </div>
    )
}
