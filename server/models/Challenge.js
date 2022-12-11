const {Schema, model} = require('mongoose');
const Game = require('./Game');
const User = require('./User');
const Pokemon = require('./Pokemon');

const ChallengeSchema = new Schema({
    game: Game.schema,
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    battleParty1: {
        type: [Pokemon.schema],
        validate: [() => this.battleParty1.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    battleParty2: {
        type: [Pokemon.schema],
        validate: [() => this.battleParty2.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    p1Caught: [Pokemon.schema],
    p2Caught: [Pokemon.schema],
    p1Graveyard: [Pokemon.schema],
    p2Graveyard: [Pokemon.schema],
});

const Challenge = model('Challenge', ChallengeSchema);
module.exports = Challenge;