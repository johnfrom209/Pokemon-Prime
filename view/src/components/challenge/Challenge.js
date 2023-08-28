//outline for nuzlocke components
// import oneparty from "./1party";
// import twoparty from "./2party";
// import battleparty from "./battleparty";
// import graveyard from "./graveyard";
// import newpokemon from "./newpokemon";
// import quickref from "./quickref";

import React, { useEffect, useState } from 'react';
import dragula from 'dragula';
import AddPokemon from './AddPokemon';
import Modal from './ModalAddPokemon';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { Query_Challenges } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { Mutation_AddChallenge } from '../../utils/mutations';
import PokemonDetail from './PokemonDetail';

var drake = dragula([document.querySelector('.player1Caught'), document.querySelector('.battleparty')], {
    copy: false, revertOnSpill: true, isContainer: function (el) {
        return el.classList.contains('dragula-container');
    },
    ignore: el => el.classList.contains('no-drag')
});


let p1name = "Player 1"
// this is temp
// let pokemonArray = localStorage.getItem('player1Caught', JSON.stringify());

//the ?? operator returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let spriteList = JSON.parse(localStorage.getItem('player1Caught')) ?? [];



export default function Challenge() {

    //list of pokemon caught by player 1
    const [player1Caught, setPlayer1Caught] = useState(spriteList);

    //This is the modal state for the PokemonDetail component
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [openDetailModal, setOpenDetailModal] = useState(false);
    //search for pokemon
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPokemon = player1Caught.filter(
        (pokemon) =>
            pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (Array.isArray(pokemon.type) &&
                pokemon.type.some((type) =>
                    type.toLowerCase().includes(searchQuery.toLowerCase())
                )) ||
            (!Array.isArray(pokemon.type) &&
                pokemon.type.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handlePokemonCardClick = (pokemon) => {
        setSelectedPokemon(pokemon);
        setOpenDetailModal(true);
    };

    const [addChallenge, { error }] = useMutation(Mutation_AddChallenge);
    const addPlayerChallenge = () => {
        const playerToken = Auth.loggedIn() ? Auth.getProfile() : null;

        p1name = playerToken.data.username;

        //mutate a new challenge with player id
        let gameId = "639a814037441ad6b10cdff6"

        addChallenge({
            variables: {
                game: gameId,
                player1: playerToken.data._id
            }
        }).then((res) => {
            const challengeId = res.data.addChallenge._id;
            localStorage.setItem('challengeId', challengeId);
            // return res;
        }).catch((err) => {
            console.log('err', err);
            // return err;
        });
    }


    useEffect(() => {
        addPlayerChallenge();
    }, []);

    useEffect(() => {
        //reload the page when a pokemon is added/removed
        renderPlayer1Caught();
    });


    // const [battleparty, setBattleparty] = useState([]);
    const [graveyard, setGraveyard] = useState([]);

    const handleGraveyard = (pokemon) => {
        //add pokemon to graveyard
        setGraveyard((graveyard) => [...graveyard, pokemon]);
        console.log('graveyard', graveyard);
        setPlayer1Caught((prevState) => prevState.filter((p) => p.id !== pokemon.id));
        //update the local storage  
        localStorage.setItem('player1Caught', JSON.stringify(player1Caught));
        console.log('p1C', player1Caught)
    };

    const [openModal, setOpenModal] = useState(false);

    const renderPlayer1Caught = () => player1Caught.map((pokemon) => {
        return <AddPokemon key={pokemon.id} pokemon={pokemon} onClickDetail={handlePokemonCardClick} />
    });

    return (
        <div className='grid grid-cols-2 mainChallenge'>

            <Modal openModal={openModal} onClose={() => setOpenModal(false)} setOpenModal={setOpenModal} setPlayer1Caught={setPlayer1Caught} player1Caught={player1Caught} setSpriteList={spriteList} />
            <div className='col-span-1 h-screen '>
                <div className='p-2 ml-5 pl-0'>
                    <h2 className='text-lg'>{p1name}</h2>
                    <h4 >Alpha Sapphire</h4>
                </div>
                {/* added class 'player1Caught' just for identification. it does nothing */}
                <div className='bg-sapp-200 h-4/5 m-5 rounded border shadow-xl shadow-black ' >
                    {/* this is for the Pokemon they caught */}


                    <button onClick={() => setOpenModal(true)} className='addPokemonButton bg-sapp-400 hover:bg-sapp-50 w-full border text-white font-bold py-2 px-4 rounded mb-1'>Add Pokemon</button>

                    <div className='player1Caught dragula-container h-full w-full overflow-auto flex flex-wrap gap-4 scrollbarHide'>
                        {renderPlayer1Caught()}
                    </div>
                </div>
            </div>
            <div className='h-screen mr-6'>

                <section className='battleparty  bg-gray-800 mt-24 h-2/5 rounded overflow-auto flex flex-wrap gap-4 justify-evenly scrollbarHide'>

                    <div className="relative">
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-16 text-lg font-bold no-drag z-0 text-white-50">
                            Battle Party
                        </h3>
                        {/* Render your Pokemon cards here */}
                    </div>
                    <main className='flex flex-wrap gap-4 justify-evenly dragula-container w-full h-full z-20'>
                        {/* <BattleParty /> */}
                    </main>
                </section>


                {/* <div className='bg-gray-800 h-1/4 my-2 rounded '> */}
                {/* Quick Ref Area */}
                {/* </div> */}

                {selectedPokemon && (
                    <PokemonDetail
                        isOpen={openDetailModal}
                        onClose={() => setSelectedPokemon(null)}
                        pokemon={selectedPokemon}
                        onGraveyard={handleGraveyard}
                    />
                )}
            </div>


        </div >
    )
}
