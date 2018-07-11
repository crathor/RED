cdconst net = require('net')
const server = net.createServer()
const fs = require('fs')

let connectedClients = {}

const handleConnection = conn => {
  const currClient = `${conn.remotePort}`
  connectedClients = {
    ...connectedClients,
    [currClient]: conn
  }

  conn.write(`Welcome! your client ID is: ${currClient}\n`)

  conn.on('error', error => {
    console.log(currClient, 'has an error', error)
  })

  conn.on('data', data => {
    if (data === '') return
    Object.keys(connectedClients).forEach(client => {
      if (client !== currClient)
        connectedClients[client].write(`${client} said: ${data.toString()}`)
    })
  })

  conn.on('close', () => {
    console.log(currClient, 'closed the connection')
    Object.keys(connectedClients).forEach(client => {
      if (client !== currClient) {
        connectedClients[client].write(`${currClient} has disconnected...`)
      }
      delete connectedClients[currClient]
    })
  })
}

server.listen(9000, () => {
  console.log(`Server is Running on address %j`, server.address())
})

server.on('connection', handleConnection)
