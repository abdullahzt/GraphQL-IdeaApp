import React from 'react';
import Idea from '../../component/Idea/Idea';

import { useQuery } from '@apollo/client';

import { GET_IDEAS } from '../../queries/Ideas/Ideas';

interface Idea {
    name: String
    description: String
    category: String
    author: String
    id: String
}

const Ideas: React.FC = props => {

    const { loading, data, error } = useQuery<{ ideas: [Idea] }>(GET_IDEAS)

    if (loading) {
        return <p>Loading..</p>
    }

    if (error) {
        return <p>Error..</p>
    }

    return (
        <div>
            {data?.ideas.slice().reverse().map(idea => {

                let key = idea.id as string

                return (
                    <Idea
                        key={key}
                        name={idea.name}
                        description={idea.description}
                        category={idea.category}
                        author={idea.author}
                    />
                )
                })}
        </div>
    )

}

export default Ideas;