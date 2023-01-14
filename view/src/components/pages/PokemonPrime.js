import React from 'react'
import PPlogo from "../../images/PP.PNG";



export default function PokemonPrime() {
    return (
        <div className="flex brandTitle items-center mb-6 md:text-2xl font-semibold  dark:text-white">
            <img className="w-16 h-16 mr-2" src={PPlogo} alt="logo" />
            <span className="text-red-800 pl-1">P</span>okemon{" "}
            <span className="text-blue-800 pl-3">P</span>rime
        </div>
    )
}
