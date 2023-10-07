import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { Accounts } from './models/Account.js';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers/accounts.resolvers.graphql';
import { typeDefs } from './graphql/typedefs/account.graphql';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const router = express.Router();
server.applyMiddleware({ app });

// App variables
// --------------------------
app.set('port', config.port);
app.set('projectName', 'illLiveBranch');
app.set('environment', config.environment);

// Database connection
// -------------------
let db,
    dbURI = `mongodb+srv://admin:${config.mongodb.password}@cluster0.aq5bu0h.mongodb.net/accounts?retryWrites=true&w=majority`;
// mongodb+srv://admin:i31BpQbrmg86elZK@cluster0.aq5bu0h.mongodb.net/

const mongooseConnection = mongoose.connect(dbURI, {
    useNewUrlParser: true,
});
db = mongoose.connection;
mongoose.set('debug', true);
db.on('connected', () => {
    console.log('Mongoose connection CONNECTED');
});
db.on('error', (err) => {
    console.log('Mongoose connection ERROR. Error: ' + err);
    mongoose.disconnect();
});
db.on('disconnected', () => {
    console.log('Mongoose connection DISCONNECTED');
    mongoose.connect(dbURI, {
        server: { auto_reconnect: true },
        useFindAndModify: false,
    });
});

// Middleware
// -------------------
const corsOpts = {
    origin: '*',

    methods: ['GET', 'POST'],

    allowedHeaders: ['Content-Type'],
};
app.use(
    cors({
        origin: '*',
        credentials: false,
    })
);

// Routes
// ------------------------------------
app.get('/accounts', async (req, res) => {
    try {
        const response = await Accounts.findById('652173c58aeacd0b69863aa0');
        console.log(response);
        res.status(200).json({ accounts: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: error,
        });
    }
});

app.use(function (req, res) {
    console.log(`404 error`);
    res.status(404).json({
        data: "Sorry, can't find that!",
    });
});

app.use(express.static('../'));

// Path: node_server/package.json
app.listen(3000, () => console.log('Server ready at http://localhost:3000/'));
