import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
export const ToDos = new Mongo.Collection('todos')

console.log(Meteor)

if (Meteor.isServer) {
  Meteor.publish('todos', function todosPublication() {
    return ToDos.find({ owner: this.userId })
  })
}

Meteor.methods({
  'todos.toggleComplete'(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        'todos.toggleComplete.not-authorized',
        'You are not allowed to update to-dos for other users.'
      )
    }
    ToDos.update(todo._id, {
      $set: { complete: !todo.complete }
    })
  },
  'todos.createTodo'(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        'todos.createTodo.not-authorized',
        'You cannot add a todo item to another users list!'
      )
    }
    ToDos.insert(todo)
  },
  'todos.removeTodo'(todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error(
        'todos.createTodo.not-authorized',
        'You cannot remove a todo item of another users list!'
      )
    }
    ToDos.remove(todo)
  },
  'todos.selectAll'() {
    ToDos.update(
      { owner: this.userId, complete: false },
      { $set: { complete: true } },
      { multi: true }
    )
  },
  'todos.clearCompleted'() {
    ToDos.remove({ owner: this.userId, complete: true })
  }
})
