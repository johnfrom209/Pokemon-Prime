const {Schema, model} = require('mongoose');
const Pokemon = require('./Pokemon');

const encounterSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    pokemon: [Pokemon.schema],
});

const Encounter = model('Encounter', encounterSchema);
module.exports = Encounter;