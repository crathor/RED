import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = ({ todos, markCompleted, removeTodo }) => {
  const styles = {
    emptyList: {
      padding: '15px'
    }
  }
  let renderedList = todos.map(item => {
    return (
      <Todo
        key={item._id}
        //=============
        // this is passing all of the props of each item. in this case:
        // id, complete and text
        item={item}
        //=============
        removeTodo={removeTodo}
        markCompleted={markCompleted}
      />
    )
  })
  if (todos.length === 0) {
    renderedList = <li style={styles.emptyList}>Nothing on the agenda</li>
  }
  return (
    <div className="TodoList">
      <ul>{renderedList}</ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired
    })
  ).isRequired,
  markCompleted: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoList
