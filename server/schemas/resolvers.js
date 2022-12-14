const { AuthenticationError } = require('apollo-server-express');
const { User, Game, Leader, Pokemon, Challenge } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        //for challenges
        challenge: async (parent, { challengeId }) => {
            return await Challenge.findOne({ _Id: challengeId }).populate('game').populate('player1').populate('player2').populate('battleParty1').populate('battleParty2').populate('p1Caught').populate('p2Caught').populate('p1Graveyard').populate('p2Graveyard');
        },
        challenges: async (parent, { }) => {
            return await Challenge.find().populate("game").populate("player1").populate("player2").populate("p1Caught")
        },
        //for games
        game: async (parent, { gameId }) => {
            return await Game.findOne({ _Id: gameId }).populate("gymLeaders");
        },
        games: async () => {
            return await Game.find().populate("gymLeaders");
        },

        //for leaders
        leader: async (parent, { leaderId }) => {
            return await Leader.findOne({ _Id: leaderId }).populate("pokemonParty");
        },
        leaders: async () => {
            return await Leader.find().populate("pokemonParty");
        },

        //for pokemon
        pokemon: async (parent, { pokemonId }) => {
            return await Pokemon.findOne({ _Id: pokemonId });
        },
        pokemons: async () => {
            return await Pokemon.find();
        },

        //for users
        user: async (parent, { userId }) => {
            return await User.findOne({ _Id: userId });
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
        addChallenge: async (parent, { game, player1, player2, battleParty1, battleParty2, p1Caught, p2Caught, p1Graveyard, p2Graveyard }) => {
            const challenge = await Challenge.create({ game, player1, player2, battleParty1, battleParty2, p1Caught, p2Caught, p1Graveyard, p2Graveyard });
            return challenge;
        },
        addGame: async (parent, { title, encounters, gymLeaders }) => {
            const game = await Game.create({ title, encounters, gymLeaders });
            return game;
        },
        addPlayer1Caught: async (parent, { challengeId, pokemonId }) => {
            const challenge = await Challenge.findOneAndUpdate(
                { _id: challengeId }, { $addToSet: { p1Caught: pokemonId } }, { new: true }
            );
            return challenge;
        },
        // addLeader: async (parent, { name, pokemonType, pokemonParty, maxLevel, badge }) => {
        //     const leader = await Leader.create({ name, pokemonType, pokemonParty, maxLevel, badge });
        //     return leader;
        // },
        addPokemon: async (parent, { name, species, pokemonType, superEffective, weakness, sprite, evolution }) => {
            const pokemon = await Pokemon.create({ name, species, pokemonType, superEffective, weakness, sprite, evolution });
            return pokemon;
        },
        /* ======================= Untested ========================= */
        // addPokemonToBattleParty: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $addToSet: { battleParty1: context.user._id } }, { new: true });
        //     return challenge;
        // },
        // addPokemonToGraveyard: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $addToSet: { p1Graveyard: context.user._id } }, { new: true });
        //     return challenge;
        // },
        // addPokemonToCaught: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $addToSet: { p1Caught: context.user._id } }, { new: true });
        //     return challenge;
        // },
        /* =========================================================== */
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        //for logging in
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);

            return { token, user };
        },

        // for removing 
        removeChallenge: async (parent, { challengeId }) => {
            return await Challenge.findOneAndDelete({ _Id: challengeId });
        },
        // removeGame: async (parent, { gameId }) => {
        //     return await Game.findOneAndDelete({ _Id: gameId });
        // },
        // removeLeader: async (parent, { leaderId }) => {
        //     return await Leader.findOneAndDelete({ _Id: leaderId });
        // },
        removePokemon: async (parent, { pokemonId }) => {
            return await Pokemon.findOneAndDelete({ _Id: pokemonId });
        },
        removeUser: async (parent, { userId }) => {
            return await User.findOneAndDelete({ _Id: userId });
        },
        /* =========+++++++++== Untested ========+++++++++++++++==== */
        // removePokemonFromBattleParty: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $pull: { battleParty1: context.user._id } }, { new: true });
        //     return challenge;
        // },
        // removePokemonFromGraveyard: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $pull: { p1Graveyard: context.user._id } }, { new: true });
        //     return challenge;
        // },
        // removePokemonFromCaught: async (parent, { challengeId }, context) => {
        //     const challenge = await Challenge.findOneAndUpdate({ _Id: challengeId }, { $pull: { p1Caught: context.user._id } }, { new: true });
        //     return challenge;
        // },
        /* ================++++++++++++++++++++++++================= */

        //for updating
        updateChallenge: async (parent, args, context) => {
            if (context.user) {
                return await Challenge.findOneAndUpdate({ _Id: context.challenges._Id }, args, { new: true });
            }
        },
        updateGame: async (parent, { _Id, title }) => {
            return await Game.findOneAndUpdate({ _Id: _Id }, { title: title }, { new: true });

        },

    }
}

module.exports = resolvers;