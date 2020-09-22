import React from 'react';
import classes from './Idea.module.css';

const Idea: React.FC = props => (
    <div className={classes.Idea} >
        <h2>Idea name</h2>
        <h4 style={{fontWeight: 300}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus eos cupiditate iure mollitia necessitatibus rerum fugit magnam quas? Nobis repudiandae quos ex, non libero natus reiciendis et cupiditate distinctio quaerat quasi impedit, expedita pariatur repellat accusantium tenetur laborum animi! Suscipit consequatur ab dolorem vero quam eum eaque deleniti aliquid?</h4>
        <h4>Category: <span className={classes.Light} >hello</span></h4>
        <h4>Author: <span className={classes.Light} >hello</span></h4>
    </div>
);

export default Idea