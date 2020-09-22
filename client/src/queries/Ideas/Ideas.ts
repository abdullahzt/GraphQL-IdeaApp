import { gql } from '@apollo/client';

export const GET_IDEAS = gql`
        query GetIdeas {
            ideas {
                id
                name
                description
                category
                author
            }
        }
    `;