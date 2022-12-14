const { Schema, model } = require('mongoose');
const Pokemon = require('./Pokemon');

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    pokemonType:
    {
        type: [String],
        required: true,
    }
    ,
    pokemonParty:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pokemon'
            }
        ],
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