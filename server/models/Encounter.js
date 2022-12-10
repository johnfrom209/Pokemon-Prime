const {schemas, model} = require('mongoose');
const Pokemon = require('./Pokemon');

const encounterSchema = new Schema({
    route: {
        type: String,
        required: true,
    },
    pokemon: [Pokemon],
});

const Encounter = model('Encounter', encounterSchema);
module.exports = Encounter;