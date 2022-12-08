const {Schema, model} = require('mongoose');
const Pokemon = require('./Pokemon');

const leaderSchema = newSchema({
    name: {
        type: String,
        required: true,
    },
    type: [
        {
            type: [String],
            required: true,
        }
    ],
    pokemonParty: {
            type: [Pokemon],
    },
    maxLevel: {
        type: Number,
        required: true,
    },
    badge: {
        type: String,
        required: true,
    }
});

const Leader = model('Leader', leaderSchema);
module.exports = Leader;