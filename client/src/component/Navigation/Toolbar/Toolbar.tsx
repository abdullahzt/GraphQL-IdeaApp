import React from 'react';
import classes from './Toolbar.module.css';

interface ToolbarProps {
    onClick: (event: React.FormEvent) => void
}

const Toolbar: React.FC<ToolbarProps> = props => (
    <header className={classes.Toolbar} >
        <div style={{width: "70px"}} ></div>
        <h2>Idea App</h2>
        <button onClick={props.onClick} >Add</button>
    </header>
)

export default Toolbar;