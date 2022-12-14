const db = require('../config/connection');
const { Game, Challenge, User, Pokemon, Leader } = require('../models');
const gameSeeds = require('./gameSeed.json');
const pokemonSeeds = require('./pokemonSeed.json');

db.once('open', async () => {
    try {
        await Challenge.deleteMany({});
        await Game.deleteMany({});
        await User.deleteMany({});
        await Pokemon.deleteMany({});
        await Leader.deleteMany({});
        console.log('All data deleted!');
        const pokemon = await Pokemon.create(pokemonSeeds);
        // const games = await Game.create(gameSeeds);
        console.log('Games seeded!');
        process.exit(0);

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});