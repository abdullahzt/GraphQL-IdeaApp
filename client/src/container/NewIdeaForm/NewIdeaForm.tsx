import React, { ChangeEvent, useState } from 'react';
import classes from './NewIdeaForm.module.css';

import { useMutation, gql } from '@apollo/client';
import { ADD_IDEA } from '../../mutations/NewIdea/NewIdea';

interface NewIdeaFormProps {
    toggleFormShow: () => void
}

const NewIdeaForm: React.FC<NewIdeaFormProps> = props => {

    const [form, setForm] = useState({
        name: "",
        description: "",
        author: "",
        category: ""
    })

    const [createIdea] = useMutation(ADD_IDEA, {
        update(cache, { data: { createIdea } }) {
            cache.modify({
                fields: {
                    ideas(existingIdeas = []) {
                        const newIdeaRef = cache.writeFragment({
                            data: createIdea,
                            fragment: gql`
                                fragment NewIdea on Idea {
                                    id
                                    name
                                    description
                                    category
                                    author
                                }
                            `
                        });
                        return [...existingIdeas, newIdeaRef]
                    }
                }
            })
        }
    })

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        createIdea({
            variables: { newIdea: { ...form } },
            optimisticResponse: {
                __typename: "Mutation",
                createIdea: {
                    __typename: "Idea",
                    id: '',
                    name: form.name,
                    description: form.description,
                    category: form.category,
                    author: "Loading.."
                }
            }
        }).catch(err => console.log(err))
        props.toggleFormShow()
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, eventName: string) => {
        const { currentTarget } = event
        
        setForm(prevForm => ({
            ...prevForm,
            [eventName]: currentTarget.value
        }))
    }

    return (
        <div className={classes.Form} >
            <h2>Submit an Idea!</h2>
            <form>
                <input onChange={(event) => inputChangeHandler(event, "name")} value={form.name || ""} placeholder="Name" type="text"/>

                <input onChange={(event) => inputChangeHandler(event, "category")} value={form.category || ""} placeholder="Category" type="text"/>

                <textarea onChange={(event) => inputChangeHandler(event, "description")} value={form.description || ""} placeholder="Description" ></textarea>
  
                <input onChange={(event) => inputChangeHandler(event, "author")} value={form.author || ""} placeholder="Author" type="text"/>

                <button onClick={formSubmitHandler} >Submit!</button>
            </form>
        </div>
    )

}

export default NewIdeaForm;