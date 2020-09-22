import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers';
import typeDefs from './schema';

const express = require('express');
const serviceAccount = require("./graphql-ideaapp-firebase-adminsdk-gv3fz-7d584a88e3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://graphql-ideaapp.firebaseio.com"
});

const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app, path: "/", cors: true })

export const graphql = functions.https.onRequest(app)
