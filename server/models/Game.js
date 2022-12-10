const {Schema, model} = require('mongoose');
const Encounter = require('./Encounter');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    encounters: [Encounter], //what goes here?
    gymLeaders: [Leaders]
});

const Game = model('Game', gameSchema);
module.exports = Game;