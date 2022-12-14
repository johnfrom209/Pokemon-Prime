const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/Auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

/* ================= Routes to client Side not done yet ================= */

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../view/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/build/index.html'));
});


// integrate our Apollo server with the Express application as middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
};

startApolloServer(typeDefs, resolvers);