import { gql } from "@apollo/client";

//add pokemon to database
//example: {
//     "name": "Bmo",
//     "species": "Pickachu",
//     "type": ["Electric"],
//     "superEffective": ["Water", "Flying"],
//     "weakness": ["Ground"],
//     "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
//     "evolution": ["Raichu"]
//}

//add user to database
export const Mutation_AddUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//login user
export const Mutation_LoginUser = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Mutation_AddPokemon = gql`
  mutation addPokemon(
    $name: String!
    $species: String!
    $pokemonType: [String]!
    $superEffective: [String]!
    $weakness: [String]!
    $sprite: String!
    $evolution: [String]!
  ) {
    addPokemon(
      name: $name
      species: $species
      pokemonType: $pokemonType
      superEffective: $superEffective
      weakness: $weakness
      sprite: $sprite
      evolution: $evolution
    ) {
      _id
      name
      species
      pokemonType
      superEffective
      weakness
      sprite
      evolution
    }
  }
`;

//need to add the mutation to add to player's caught pokemon
export const Mutation_AddPlayer1Caught = gql`
  mutation addPlayer1Caught($challengeId: ID!, $pokemonId: ID!) {
    addPlayer1Caught(challengeId: $challengeId, pokemonId: $pokemonId) {
        _id
    }
  }
`;
