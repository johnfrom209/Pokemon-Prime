import { gql } from "@apollo/client";

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

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        wins
        losses
    }
}
`;
