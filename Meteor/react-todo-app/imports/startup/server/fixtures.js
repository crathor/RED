import { Meteor } from 'meteor/meteor'
import { ToDos } from '../../api/todos'

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: 'c@rathor.com',
      password: 'password'
    })
    // add data to the database
    if (ToDos.find().count() === 0) {
      ToDos.insert({
        title: 'Learn Meteor',
        complete: false,
        owner: user
      })
    }
  }
})
