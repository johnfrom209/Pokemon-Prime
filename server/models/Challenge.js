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
        type: [{
            type: Schema.Types.ObjectId, 
            ref: 'Pokemon'
        }],
        validate: [() => this.battleParty1.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    battleParty2: {
        type: [{
            type: Schema.Types.ObjectId, 
            ref: 'Pokemon'
        }],
        validate: [() => this.battleParty2.length <= 6, 'Battle party must not be more than 6 Pokemon.']
    },
    p1Caught: [{
        type: Schema.Types.ObjectId, 
        ref: 'Pokemon'
    }],
    p2Caught: [{
        type: Schema.Types.ObjectId, 
        ref: 'Pokemon'
    }],
    p1Graveyard: [{
        type: Schema.Types.ObjectId, 
        ref: 'Pokemon'
    }],
    p2Graveyard: [{
        type: Schema.Types.ObjectId, 
        ref: 'Pokemon'
    }],
});

const Challenge = model('Challenge', ChallengeSchema);
module.exports = Challenge;