import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()

    this.state = {
      todoValue: '',
      nextId: 1
    }
  }
  componentDidMount() {
    this.myRef.current.focus()
  }
  createTodo = event => {
    if (event.keyCode) {
      // allows the use of the add button
      if (event.keyCode !== 13) return
    }
    if (!this.state.todoValue) return
    const todo = {
      id: this.state.nextId,
      text: this.state.todoValue,
      isComplete: false
    }
    this.props.createTodo(todo)
    this.setState({ todoValue: '' })
  }
  handleChange = event => {
    const todoValue = event.target.value
    this.setState(prevState => ({
      todoValue,
      nextId: prevState.nextId + 1
    }))
  }
  render() {
    return (
      <div onKeyDown={this.createTodo} className="CreateTodo">
        <input
          type="text"
          value={this.state.todoValue}
          placeholder="What do you want to do?"
          onChange={this.handleChange}
          ref={this.myRef}
        />
        <button onClick={this.createTodo}>Add</button>
      </div>
    )
  }
}

CreateTodo.propTypes = {
  createTodo: PropTypes.func.isRequired
}

export default CreateTodo
