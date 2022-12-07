const {Schema, model} = require('mongoose');
const Game = require('./Game');
const User = require('./User');
const Pokemon = require('./Pokemon');

const ChallengeSchema = new Schema({
    game: Game,
    player1: User,
    player2: User,
    battleParty1: {
        type: [Pokemon],
        validate: [() => this.battleParty1.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    battleParty2: {
        type: [Pokemon],
        validate: [() => this.battleParty2.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    p1Caught: [Pokemon],
    p2Caught: [Pokemon],
    p1Graveyard: [Pokemon],
    p2Graveyard: [Pokemon],
});

const Challenge = model('Challenge', ChallengeSchema);
module.exports = Challenge;