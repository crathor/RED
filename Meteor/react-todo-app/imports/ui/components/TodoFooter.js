import React from 'react'
import PropTypes from 'prop-types'

const TodoFooter = ({ clearSelected, selectAll }) => {
  return (
    <div className="TodoFooter">
      <button onClick={selectAll}>Select All</button>
      <button onClick={clearSelected}>Clear Completed</button>
    </div>
  )
}

TodoFooter.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired
}

export default TodoFooter
