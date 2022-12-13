const { Schema, model } = require('mongoose');
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
    pokemonParty:
        [
            {
                // name: {
                //     type: String,
                //     required: true,
                // },
                // sprite: {
                //     type: String,
                //     required: true,
                // },
                // type: {
                //     type: [String],
                //     required: true,
                // },
                // superEffective: {
                //     type: [String],
                //     required: true,
                // },
                // weakness: {
                //     type: [String],
                //     required: true,
                // },
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