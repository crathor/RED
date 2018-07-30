const zmq = require('zeromq')
const conn = zmq.socket('rep')

// Just a helper function for logging to the console with a timestamp.
const logToConsole = message => {
  console.log('[' + new Date().toLocaleTimeString() + '] ' + message)
}

// Add a callback for the event that is invoked when we receive a message.
conn.on('message', message => {
  // Convert the message into a string and log to the console.
  logToConsole('Received message: ' + message.toString('utf8'))
})

// Connect to the server instance.
conn.connect('tcp://127.0.0.1:9000')
