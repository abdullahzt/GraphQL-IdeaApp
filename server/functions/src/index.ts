import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

const express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';

const serviceAccount = require("./graphql-ideaapp-firebase-adminsdk-gv3fz-7d584a88e3.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://graphql-ideaapp.firebaseio.com"
});

interface Idea {
    name: String
    description: String
    category: String
    author: String
}

const typeDefs = gql`
    type Idea {
        name: String
        description: String
        category: String
        author: String
    }

    input IdeaInput {
        name: String
        description: String
        category: String
        author: String
    }

    type Query {
        ideas: [Idea]
    }

    type Mutation {
        createIdea(input: IdeaInput!): Idea!
    }
`

const resolvers = {
    Query: {
        ideas: () => {
            return admin.database()
                .ref("ideas")
                .once("value")
                .then(snap => snap.val())
                .then(val => Object.keys(val).map(key => val[key]))
        }
    },

    Mutation: {
        createIdea: async(_: any, { input }: any) => {

            const idea: Idea = {
                name: input.name,
                description: input.description,
                category: input.category,
                author: input.author
            }

            return admin.database()
                .ref("ideas")
                .push(idea)
                .then(ref => ref.once('value'))
                .then(snap => snap.val())

        }
    }
};

const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app, path: "/", cors: true })

export const graphql = functions.https.onRequest(app)
