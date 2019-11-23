const express = require('express')
const { ApolloServer } = require("apollo-server-express");
const mongoose = require('mongoose');//
const session = require('express-session');//
const MongoStore = require('connect-mongo')(session);//
const typeDefs = require("./schema/schema").typeDefs;
const resolvers = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const { User } = require('./models/models');

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
const MONGO_URI = 'mongodb+srv://seamus:seamus@cluster0-vxr4f.mongodb.net/test?retryWrites=true&w=majority';

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'aaabbbccc',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));
