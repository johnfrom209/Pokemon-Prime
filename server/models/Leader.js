const {Schema, model} = require('mongoose');

const leaderSchema = newSchema({
    name: {
        type: String,
        required: true,
    },
    type: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon',
        }
    ],
    pokemonParty: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pokemon',
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