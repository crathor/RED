import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TrashIcon = <FontAwesomeIcon icon={faTrash} />

const Todo = ({ item, markCompleted, removeTodo }) => {
  return (
    <li className="Todo">
      <span>{item.title}</span>
      <div className="controls">
        <div className="checkbox">
          <input
            id={`todo${item._id}`}
            type="checkbox"
            checked={item.complete}
            onChange={() => markCompleted(item)}
          />
          <label htmlFor={`todo${item._id}`} />
        </div>

        <button
          onClick={() => {
            removeTodo(item)
          }}
        >
          {TrashIcon}
        </button>
      </div>
    </li>
  )
}

Todo.propTypes = {
  item: PropTypes.object.isRequired
}

export default Todo
