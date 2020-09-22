import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Idea {
        id: ID!
        name: String!
        description: String!
        category: String!
        author: String!
    }

    input IdeaInput {
        name: String!
        description: String!
        category: String!
        author: String!
    }

    type Query {
        ideas: [Idea]
    }

    type Mutation {
        createIdea(input: IdeaInput!): Idea!
    }
`

export default typeDefs;