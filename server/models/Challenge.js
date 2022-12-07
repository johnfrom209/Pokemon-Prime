const {Schema, model} = require('mongoose');
const Game = require('./Game');
const User = require('./User');
const Pokemon = require('./Pokemon');

const ChallengeSchema = new Schema({
    game: Game,
    player1: User,
    player2: User,
    battleParty: [Pokemon],
    battleParty2: [Pokemon],
    p1Caught: [Pokemon],
    p2Caught: [Pokemon],
});

const Challenge = model('Challenge', ChallengeSchema);
module.exports = Challenge;