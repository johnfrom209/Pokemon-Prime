const {Schema, model} = require('mongoose');
const Encounter = require('./Encounter');
const Leader = require('./Leader');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    encounters: [Encounter.schema], //what goes here?
    gymLeaders: [Leader.schema]
});

const Game = model('Game', gameSchema);
module.exports = Game;