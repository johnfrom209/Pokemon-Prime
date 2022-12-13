const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Challenge {
        _id: ID
        game: Game
        player1: User!
        player2: User
        battleParty1: [Pokemon]
        battleParty2: [Pokemon]
        p1Caught: [Pokemon]
        p2Caught: [Pokemon]
        p1Graveyard: [Pokemon]
        p2Graveyard: [Pokemon]
    }

    type Game {
        _id: ID
        title: String!
        encounters: [String]
        gymLeaders: [Leader]
    }

    type Leader {
        _id: ID
        name: String!
        type: [String]!
        maxLevel: Int!
        badge: String!
        pokemonParty: [Pokemon]
    }

    type Pokemon {
        _id: ID
        name: String!
        species: String!
        type: String!
        level: Int!
        superEffective: [String]
        weakness: [String]
        sprite: String
        evolution: [String]
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        wins: Int
        losses: Int
    }

    type Encounter {
        _id: ID
        location: String!
        pokemon: Pokemon
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        challenge(_id: ID!): Challenge
        challenges: [Challenge]

        game(_id: ID!): Game
        games: [Game]

        leader(_id: ID!): Leader
        leaders: [Leader]

        pokemon(_id: ID!): Pokemon
        pokemons: [Pokemon]

        user(_id: ID!): User
        users: [User]

    }

    type Mutation {
        addChallenge(game: ID!, player1: ID!, player2: ID): Challenge

        addPlayer1Caught(challengeId: ID!, pokemonId: ID!): Challenge

        addGame(title: String!, encounters: [String], gymLeaders: [String]): Game

        addPokemon(name: String!, species: String!, type: String!, superEffective: [String], weakness: [String], sprite: String, evolution: String): Pokemon

        addUser(username: String!, email: String!, password: String!): Auth

        login(email: String!, password: String!): Auth

        updateChallenge(_id: ID!, game: ID, player1: ID, player2: ID, battleParty1: [ID], battleParty2: [ID], p1Caught: [ID], p2Caught: [ID], p1Graveyard: [ID], p2Graveyard: [ID]): Challenge

        updateGame(_id: ID!, title: String, encounters: [ID], gymLeaders: [ID]): Game

        updatePokemon(_id: ID!, name: String, species: String, type: String, level: Int, superEffective: [String], weakness: [String], sprite: String, evolution: String): Pokemon

        updateUser(_id: ID!, username: String, email: String, password: String, wins: Int, losses: Int): User

        removeChallenge(_id: ID!): Challenge

        removePokemon(_id: ID!): Pokemon

        removeUser(_id: ID!): User
    }
`

module.exports = typeDefs;