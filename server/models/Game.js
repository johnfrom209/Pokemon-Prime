const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    encounters: [{}], //Shit what goes here?
    gymLeaders: [Leaders]
});