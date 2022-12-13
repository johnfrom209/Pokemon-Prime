import { gql } from '@apollo/client';

export const Query_Pokemon = gql`
query getPokemon($pokemon: String!) {
    getPokemon(pokemon: $pokemon) {
        name
        species
        type
        level
        superEffective
        weakness
        sprite
        evolution
    }
}
`;

