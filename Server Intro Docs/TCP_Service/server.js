const zmq = require('zeromq')
const conn = zmq.socket('req')
let counter = 0

// Just a helper function for logging to the console with a timestamp.
function logToConsole(message) {
  console.log('[' + new Date().toLocaleTimeString() + '] ' + message)
}

const sendMessage = message => {
  logToConsole('Sending: ' + message)
  conn.send(message)
}

// Begin listening for connections on all IP addresses on port 9998.
conn.bind('tcp://*:9000', error => {
  if (error) {
    logToConsole('Failed to bind conn: ' + error.message)
    process.exit(0)
  } else {
    logToConsole('Server listening on port 9000')

    // Increment the counter and send the value to the clients every second.
    setInterval(() => {
      sendMessage(counter++)
    }, 1000)
  }
})
