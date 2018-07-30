import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import TodoFooter from './components/TodoFooter'
class App extends Component {
  state = {
    todos: []
  }
  clearCompleted = () => {
    const todos = [...this.state.todos]
    const newList = todos.filter(item => !item.isComplete)
    this.setState({
      todos: newList
    })
  }
  selectAll = () => {
    let todos = [...this.state.todos]
    todos.map(todo => (todo.isComplete = true))
    this.setState({ todos })
  }
  handleMarkCompleted = id => {
    const todos = [...this.state.todos]
    let completedItem = todos.find(item => item.id === id)
    completedItem.isComplete = !completedItem.isComplete
    this.setState({ todos })
  }
  createTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }))
  }
  removeTodo = id => {
    const todos = [...this.state.todos]
    let newList = todos.filter(item => item.id !== id)
    this.setState({ todos: newList })
  }
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <div className="todo-wrapper">
          <TodoList
            todos={this.state.todos}
            removeTodo={id => this.removeTodo(id)}
            markCompleted={id => this.handleMarkCompleted(id)}
          />
          <CreateTodo createTodo={this.createTodo} />
          <TodoFooter
            clearSelected={this.clearCompleted}
            selectAll={this.selectAll}
          />
        </div>
      </div>
    )
  }
}

export default App
