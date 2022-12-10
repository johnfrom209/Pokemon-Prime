const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

cosnt PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});