const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type Challenge {
        _id: ID
        game: Game,
        player1: User!,
        player2: User,
        battleParty1: [Pokemon],
        battleParty2: [Pokemon],
        p1Caught: [Pokemon],
        p2Caught: [Pokemon],
        p1Graveyard: [Pokemon],
        p2Graveyard: [Pokemon],
    }

    type Game {
        _id: ID
        title: String!
        encounters: [Encounter]
        gymLeaders: [Leader]
    }

    type Leader {
        _id: ID
        name: String!
        type: [String]
        pokemonParty: [Pokemon]
        maxLevel: Int
        badge: String
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
        evolution: String
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        wins: Int
        losses: Int
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
        addChallenge(game: ID!, player1: ID!, player2: ID, battleParty1: [ID], battleParty2: [ID], p1Caught: [ID], p2Caught: [ID], p1Graveyard: [ID], p2Graveyard: [ID]): Challenge

        addGame(title: String!, encounters: [ID], gymLeaders: [ID]): Game

        addLeader(name: String!, type: [String], pokemonParty: [ID], maxLevel: Int, badge: String): Leader

        addPokemon(name: String!, species: String!, type: String!, level: Int!, superEffective: [String], weakness: [String], sprite: String, evolution: String): Pokemon

        addUser(username: String!, email: String!, password: String!, wins: Int, losses: Int): User



        updateChallenge(_id: ID!, game: ID, player1: ID, player2: ID, battleParty1: [ID], battleParty2: [ID], p1Caught: [ID], p2Caught: [ID], p1Graveyard: [ID], p2Graveyard: [ID]): Challenge

        updateGame(_id: ID!, title: String, encounters: [ID], gymLeaders: [ID]): Game

        updateLeader(_id: ID!, name: String, type: [String], pokemonParty: [ID], maxLevel: Int, badge: String): Leader

        updatePokemon(_id: ID!, name: String, species: String, type: String, level: Int, superEffective: [String], weakness: [String], sprite: String, evolution: String): Pokemon

        updateUser(_id: ID!, username: String, email: String, password: String, wins: Int, losses: Int): User



        removeChallenge(_id: ID!): Challenge

        removeGame(_id: ID!): Game

        removeLeader(_id: ID!): Leader

        removePokemon(_id: ID!): Pokemon

        removeUser(_id: ID!): User

    }
`
/*
 for query
    challenge
*/