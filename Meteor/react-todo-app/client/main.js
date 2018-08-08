import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import './main.html'
import App from '../imports/ui/containers/App'
import registerServiceWorker from './registerServiceWorker'
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
  registerServiceWorker()
})
