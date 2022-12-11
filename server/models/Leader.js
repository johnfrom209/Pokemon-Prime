const {Schema, model} = require('mongoose');
const Pokemon = require('./Pokemon');

const leaderSchema = new Schema({
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
            type: [Pokemon.schema],
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