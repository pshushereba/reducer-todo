import React, {useState} from 'react'
import uuid4 from 'uuid4';
import {addTodo} from '../actions/todoActions.js';

export default function TodoForm({dispatch}) {
    const [todo, setTodo] = useState({item: "", completed: false, id: uuid4()});

    const handleChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const submitForm = () => {
        dispatch(addTodo(todo));
    }
    
    return (
        <div>
            <input
                type="text"
                name="item"
                placeholder="Add Todo"
                value={todo.item}
                onChange={handleChange}></input>
            <button onClick={submitForm}>Add ToDo</button>
        </div>
    )
}
