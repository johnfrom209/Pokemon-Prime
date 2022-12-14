const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    pokemonType: {
        type: [String],
        required: true
    },
    superEffective: [String],

    weakness: [String],

    sprite: {
        type: String,
    },
    evolution: {
        type: [String],
    },
});

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;