import { gql } from '@apollo/client';

export const ADD_IDEA = gql`
  mutation CreateIdea($newIdea: IdeaInput!) {
    createIdea(input: $newIdea) {
      id,
      name, 
      description, 
      author,
      category
    }
  }
`