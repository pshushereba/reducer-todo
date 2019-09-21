import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/reducer.js';

import TodoItem from './TodoItem.js';

const TodoList = ({state}) => {
    return(
        <div>
            <h1>To Do:</h1>
            {state.map((todo) => {
                return <TodoItem task={todo} />
            })}
        </div>
    )
}

export default TodoList;