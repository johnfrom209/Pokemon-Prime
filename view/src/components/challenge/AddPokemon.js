import React from 'react'
import PokemonType from './PokemonType'


export default function AddPokemon({ pokemon, onClickDetail }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    pokemon.name = capitalizeFirstLetter(pokemon.name);
    pokemon.species = capitalizeFirstLetter(pokemon.species);

    return (
        <div className='card-info dragThis bg-sapp-400 rounded mb-4  xl:w-40 xl:h-48 h-40 w-32 ml-1 border-4 border-amber-300 truncate ' onClick={() => onClickDetail(pokemon)}>
            <div className='py-3 px-5 relative space-x-1 pb-0 h-16 '>
                <span className='italic mr-2 text-xs xl:textSize'>
                    {pokemon.name}
                </span>
                <img src={pokemon.sprite} alt={`Pokemon Nicknamed ${pokemon.name} `} className="h-8 xl:h-12 my-4 block pl-6 " />
                <span className="text-xs"
                >
                    {pokemon.species}

                </span>
                <br />
                {/* This is checking if the pokemon.type is an array. If it is we need to map the array, so that it sends one at a time to the react component. Else it calls on the react component with its single typing */}
                {Array.isArray(pokemon.type) ? (
                    pokemon.type.map((type, index) => (
                        <PokemonType key={index} type={type} />
                    ))
                ) : (
                    <PokemonType type={pokemon.type} />
                )}

            </div>

        </div>
    )
}
