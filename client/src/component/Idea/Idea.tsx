import React from 'react';
import classes from './Idea.module.css';

interface IdeaProps {
    name: String
    description: String
    category: String
    author: String
}

const Idea: React.FC<IdeaProps> = props => (
    <div className={classes.Idea} >
        <h2>{props.name}</h2>
        <h4 style={{fontWeight: 300}} >{props.description}</h4>
        <h4>Category: <span className={classes.Light} >{props.category}</span></h4>
        <h4>Author: <span className={classes.Light} >{props.author}</span></h4>
    </div>
);

export default Idea