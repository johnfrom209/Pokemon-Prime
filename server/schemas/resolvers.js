const {AuthenticationError} = require('apollo-server-express');
const {User, Game, Leader, Pokemon, Challenge} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        //for challenges
        challenge: async (parent, {challengeId}) => {
            return await Challenge.findOne({_Id: challengeId}).populate('game').populate('player1').populate('player2').populate('battleParty1').populate('battleParty2').populate('p1Caught').populate('p2Caught').populate('p1Graveyard').populate('p2Graveyard');
        },
        challenges: async (parent,{game, player1, player2}) => {
            const params = {};
            if (game) {
                params.game = game;
            }
            if (player1) {
                params.player1 = player1;
            }
            if (player2) {
                params.player2 = player2;
            }
            return await Challenge.find(params).populate(game).populate(player1).populate(player2)
        },
        //for games
        game: async (parent, {gameId}) => {
            return await Game.findOne({ _Id: gameId });
        },
        games: async () => {
            return await Game.find();
        },

        //for leaders
        leader: async (parent, {leaderId}) => {
            return await Leader.findOne({_Id: leaderId});
        },
        leaders: async () => {
            return await Leader.find();
        },

        //for pokemon
        pokemon: async (parent, {pokemonId}) => {
            return await Pokemon.findOne({_Id: pokemonId});
        },
        pokemons: async () => {
            return await Pokemon.find();
        },

        //for users
        user: async (parent, {userId}) => {
            return await User.findOne({_Id: userId});
        },
        users: async () => {
            return await User.find();
        },

        //for mutations
        /*
        me: async (parent, args, context) => {
        }
        */

    },
    Mutation: {
        //for creating
        addChallenge: async (parent, {game, player1, player2, battleParty1, battleParty2, p1Caught, p2Caught, p1Graveyard, p2Graveyard}) => {
            const challenge = await Challenge.create({game, player1, player2, battleParty1, battleParty2, p1Caught, p2Caught, p1Graveyard, p2Graveyard});
            return challenge;
        },
        addGame: async (parent, {title, encounters, gymLeaders}) => {
            const game = await Game.create({title, encounters, gymLeaders});
            return game;
        },
        addLeader: async (parent, {name, type, pokemonParty, maxLevel, badge}) => {
            const leader = await Leader.create({name, type, pokemonParty, maxLevel, badge});
            return leader;
        },
        addPokemon: async (parent, {name, species, type, level, superEffective, weakness, sprite, evolution}) => {
            const pokemon = await Pokemon.create({name, species, type, level, superEffective, weakness, sprite, evolution});
            return pokemon;
        },
        addUser: async (parent, {username, email, password, wins, losses}) => {
            const user = await User.create({username, email, password, wins, losses});
            //const token = signToken(user);
            return user;
        },
        // for removing 
        removeChallenge: async (parent, {challengeId}) => {
            return await Challenge.findOneAndDelete({_Id: challengeId});
        },
        removeGame: async (parent, {gameId}) => {
            return await Game.findOneAndDelete({_Id: gameId});
        },
        removeLeader: async (parent, {leaderId}) => {
            return await Leader.findOneAndDelete({_Id: leaderId});
        },
        removePokemon: async (parent, {pokemonId}) => {
            return await Pokemon.findOneAndDelete({_Id: pokemonId});
        },
        removeUser: async (parent, {userId}) => {
            return await User.findOneAndDelete({_Id: userId});
        },

        
    }
}

module.exports = resolvers;