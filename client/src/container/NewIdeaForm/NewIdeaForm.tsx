import React, { ChangeEvent, useState } from 'react';
import classes from './NewIdeaForm.module.css';

const NewIdeaForm: React.FC = props => {

    const [form, setForm] = useState({
        name: "",
        description: "",
        author: "",
        category: ""
    })

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, eventName: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [eventName]: event.currentTarget.value
        }))
    }

    return (
        <div className={classes.Form} >
            <h2>Submit an Idea!</h2>
            <form>
                <input onChange={(event) => inputChangeHandler(event, "name")} value={form.name} placeholder="Name" type="text"/>

                <input onChange={(event) => inputChangeHandler(event, "category")} value={form.category} placeholder="Category" type="text"/>

                <textarea onChange={(event) => inputChangeHandler(event, "description")} value={form.description} placeholder="Description" ></textarea>
  
                <input onChange={(event) => inputChangeHandler(event, "author")} value={form.category} placeholder="Author" type="text"/>

                <button onClick={formSubmitHandler} >Submit!</button>
            </form>
        </div>
    )

}

export default NewIdeaForm;