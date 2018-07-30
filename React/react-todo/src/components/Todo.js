import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ id, isComplete, markCompleted, removeTodo, text }) => {
  return (
    <li className="Todo">
      <span>{text}</span>
      <div className="controls">
        <div className="checkbox">
          <input
            id={`todo${id}`}
            type="checkbox"
            checked={isComplete}
            onChange={() => markCompleted(id)}
          />
          <label htmlFor={`todo${id}`} />
        </div>

        <button
          onClick={() => {
            removeTodo(id)
          }}
        >
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </li>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  markCompleted: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
