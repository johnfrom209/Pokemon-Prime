import { gql } from '@apollo/client';

// export const Query_Pokemon = gql`
// query getPokemon($pokemon: String!) {
//     getPokemon(pokemon: $pokemon) {
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


// //query the challenges
export const Query_Challenges = gql`
query challenges {
    challenges {
        _id
    }
}
`;


export const Query_FindPlayerChallenge = gql`
query findPlayerChallenge($playerId: ID!) {
    findPlayerChallenge(playerId: $playerId) {
        _id
        player1(_id: $playerId) {
            _id
            username
            }
        }
    }
`;
