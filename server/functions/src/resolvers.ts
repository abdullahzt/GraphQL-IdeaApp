import * as admin from "firebase-admin";

interface Idea {
    name: String
    description: String
    category: String
    author: String
}

const resolvers = {

    // Query

    Query: {
        ideas: () => {
            return admin.database()
                .ref("ideas")
                .once("value")
                .then(snap => snap.val())
                .then(
                    val => Object.keys(val).map(
                        key => {
                            return { 
                                id: key,
                                ...val[key] 
                            }
                        }
                    )
                )
        }
    },

    // Mutation

    Mutation: {
        createIdea: async (_: any, { input }: any) => {

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

export default resolvers;