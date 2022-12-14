const db = require('../config/connection');
const { Game, Challenge, User, Pokemon, Leader } = require('../models');
const pokemonSeeds = require('./pokemonSeed.json');
const challengeSeeds = require('./challengeSeed.json');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeed.json');
const leaderSeeds = require('./gymLeaderSeeds.json');

db.once('open', async () => {
    try {
        await Challenge.deleteMany({});
        await Game.deleteMany({});
        await User.deleteMany({});
        await Pokemon.deleteMany({});
        await Leader.deleteMany({});
        console.log('All data deleted!');
        const pokemon = await Pokemon.create(pokemonSeeds);
        console.log('Pokemon seeded!');
        const users = await User.create(userSeeds);
        console.log('Users seeded!');
        const gymLeaders = await Leader.create(leaderSeeds);
        console.log('Gym Leaders seeded!');
        // const challenge = await Challenge.create( challengeSeeds );
        // const games = await Game.create(gameSeeds);

        console.log('Games seeded!');
        process.exit(0);

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});