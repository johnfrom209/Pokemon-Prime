const db = require('../config/connection');
const { Game, Challenge, User, Pokemon, Leader } = require('../models');
const pokemonSeeds = require('./pokemonSeed.json');
const challengeSeeds = require('./challengeSeed.json');
const userSeeds = require('./userSeeds.json');
const gameSeeds = require('./gameSeed.json');
const leaderSeeds = require('./gymLeaderSeeds.json');

const roxRoster = ["Geodude", "Nosepass"];
const brawRoster = ["Machop", "Makuhita"];
const watRoster = ["Magnemite", "Voltorb", "Magneton"];
const flanRoster = ["Slugma", "Numel", "Torkoal"];
const norRoster = ["Slaking", "Vigoroth"];
const winRoster = ["Swellow", "Pelipper", "Skarmory", "Altaria"];
const ltRoster = ["Lunatone", "Solrock"];
const walRoster = ["Luvdisc", "Whiscash", "Sealeo", "Seaking", "Milotic"];

db.once('open', async () => {
    try {
        await Challenge.deleteMany({});
        await Game.deleteMany({});
        await User.deleteMany({});
        await Pokemon.deleteMany({});
        await Leader.deleteMany({});
        console.log('All data deleted!');
        const pokemon = await Pokemon.create(pokemonSeeds);
        //map through the pokemonSeeds array and create a new array and pair the name with the id
        const pokemonMap = pokemon.map(({ name, _id }) => ({ name, _id }));
        // console.log(pokemonMap);
        console.log('Pokemon seeded!');
        const users = await User.create(userSeeds);
        console.log('Users seeded!');
        const gymLeaders = await Leader.create(leaderSeeds);
        console.log('Gym Leaders seeded!');

        // console.log(gymLeaders);
        //at most I'm looping 5
        for (let i = 0; i < roxRoster.length; i++) {
            for (let j = 0; j < pokemonMap.length; j++) {
                if (roxRoster[i] == pokemonMap[j].name) {
                    await Leader.findOneAndUpdate({ name: "Roxanne" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
                }
            }
        }

        for (let i = 0; i < brawRoster.length; i++) {
            for (let j = 0; j < pokemonMap.length; j++) {
                if (brawRoster[i] == pokemonMap[j].name) {
                    await Leader.findOneAndUpdate({ name: "Brawly" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
                }
            }
        }

        for (let i = 0; i < watRoster.length; i++) {

            for (let j = 0; j < pokemonMap.length; j++) {
                if (watRoster[i] == pokemonMap[j].name) {
                    await Leader.findOneAndUpdate({ name: "Wattson" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
                }
            }
        }

        // for (let i = 0; i < pokemonMap.length; i++) {
        //     for (let j = 0; j < flanRoster.length; j++) {
        //         if (flanRoster[i] == pokemonMap[j].name) {
        //             await Leader.findOneAndUpdate({ name: "Flannery" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
        //         }
        //     }
        // }

        // for (let i = 0; i < pokemonMap.length; i++) {
        //     for (let j = 0; j < norRoster.length; j++) {
        //         if (norRoster[i] == pokemonMap[j].name) {
        //             await Leader.findOneAndUpdate({ name: "Norman" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
        //         }
        //     }
        // }

        // for (let i = 0; i < pokemonMap.length; i++) {
        //     for (let j = 0; j < winRoster.length; j++) {
        //         if (winRoster[i] == pokemonMap[j].name) {
        //             await Leader.findOneAndUpdate({ name: "Winona" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
        //         }
        //     }
        // }

        // for (let i = 0; i < pokemonMap.length; i++) {
        //     for (let j = 0; j < ltRoster.length; j++) {
        //         if (ltRoster[i] == pokemonMap[j].name) {
        //             await Leader.findOneAndUpdate({ name: "Tate & Liza" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
        //         }
        //     }
        // }

        // for (let i = 0; i < walRoster.length; i++) {
        //     for (let j = 0; j < pokemonMap.length; j++) {
        //         if (walRoster[i] == pokemonMap[j].name) {
        //             await Leader.findOneAndUpdate({ name: "Wallace" }, { $addToSet: { pokemonParty: pokemonMap[j]._id } }, { new: true });
        //         }
        //     }
        // }

        const games = await Game.create(gameSeeds);
        console.log('Games seeded!');
        console.log(games);
        //add leaders
        //add users
        for (let i = 0; i < gymLeaders.length; i++) {
            await Game.findOneAndUpdate({ name: "Pokemon Alpha Sapphire/Omega Ruby" }, { $addToSet: { gymLeaders: gymLeaders[i]._id } }, { new: true });
        }
        // const challenge = await Challenge.create(challengeSeeds);

        const chOngoing = await Challenge.create({ player1: users[0]._id, player2: users[1]._id, game: games[0]._id });

        await Challenge.findOneAndUpdate({ _id: chOngoing._id }, { $addToSet: { p1Caught: pokemon[0]._id } }, { new: true });

        console.log('Games seeded!');
        process.exit(0);

    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
});