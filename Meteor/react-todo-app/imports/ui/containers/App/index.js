import React, { Component, Fragment } from 'react'
import './styles.css'
import TodoList from '../../components/TodoList'
import CreateTodo from '../../components/CreateTodo'
import TodoFooter from '../../components/TodoFooter'
import { withTracker } from 'meteor/react-meteor-data'
import { ToDos } from '../../../api/todos'
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types'
import AccountsUIWrapper from '../../components/AccountsWrapper'

class App extends Component {
  clearCompleted = () => {
    Meteor.call('todos.clearCompleted')
  }
  selectAll = () => {
    Meteor.call('todos.selectAll')
  }
  handleMarkCompleted = item => {
    Meteor.call('todos.toggleComplete', item) // NEW!
  }
  createTodo = todo => {
    todo.owner = this.props.currentUserId
    Meteor.call('todos.createTodo', todo)
  }
  removeTodo = item => {
    Meteor.call('todos.removeTodo', item)
  }
  render() {
    const { todos, currentUserId } = this.props
    return (
      <div className="App">
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        <h1>To Do App</h1>
        <div className="todo-wrapper">
          {!currentUserId ? (
            <div className="logged-out-message">
              <p>Please sign in to see your todos.</p>
            </div>
          ) : (
            <Fragment>
              <TodoList
                todos={this.props.todos}
                removeTodo={item => this.removeTodo(item)}
                markCompleted={item => this.handleMarkCompleted(item)}
              />
              <CreateTodo createTodo={this.createTodo} />
              <TodoFooter
                clearSelected={this.clearCompleted}
                selectAll={this.selectAll}
              />
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  todos: [],
  currentUser: undefined,
  currentUserId: undefined
}
App.propTypes = {
  todos: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
}
export default withTracker(() => {
  Meteor.subscribe('todos') // NEW!
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    todos: ToDos.find({}).fetch()
  }
})(App)
