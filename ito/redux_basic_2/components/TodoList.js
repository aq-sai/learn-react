import React from 'react'
import PropType from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}{...Todo} onClick={()=> toggleTodo(todo.id)} />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        PropType.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList