import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <h2>{props.task.item}</h2>
        </div>
    )
}
