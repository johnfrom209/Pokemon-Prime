const {AuthenticationError} = require('apollo-server-express');
const {User, Game, Leader, Pokemon, Challenge} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        //for challenges
        challenge: async (parent, {challengeId}) => {
            return await Challenge.findById(challengeId).populate('game').populate('player1').populate('player2').populate('battleParty1').populate('battleParty2').populate('p1Caught').populate('p2Caught').populate('p1Graveyard').populate('p2Graveyard');
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
        }
    }
}