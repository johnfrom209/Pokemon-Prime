// import { gql } from '@apollo/client';

// export const Mutation_AddPokemon = gql`
// mutation addPokemon($name: String!, $species: String!, $type: [String]!, $level: Int!, $superEffective: [String]!, $weakness: [String]!, $sprite: String!, $evolution: [String]!) {
//     addPokemon(name: $name, species: $species, type: $type, level: $level, superEffective: $superEffective, weakness: $weakness, sprite: $sprite, evolution: $evolution) {
//         name
//         species
//         type
//         level
//         superEffective
//         weakness
//         sprite
//         evolution
//     }
// }
// `;

//need to add the mutation to add to player's caught pokemon
// export const Mutation_AddPlayer1Caught = gql`
// mutation addPlayer1Caught($challengeId: ID!, $pokemonId: ID!) {
//     addPlayer1Caught(challengeId: $challengeId, pokemonId: $pokemonId) {
//         challenge {
//             player1Caught
//     }
// }
// `;