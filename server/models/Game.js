const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    encounters: [{}], //what goes here?
    gymLeaders: [Leaders]
});

const Game = model('Game', gameSchema);
module.exports = Game;