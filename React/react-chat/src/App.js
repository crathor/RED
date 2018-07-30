import React, { Component } from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import Chatkit from '@pusher/chatkit'
import { tokenUrl, instanceLocator } from './config'
import './styles.css'

class App extends Component {
  state = {
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    roomId: null
  }
  componentDidMount = () => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'becky',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    })
    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(e => console.log('error on connecting:', e))
  }
  getRooms = () => {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(e => console.log('error on JoinableRooms:', e))
  }
  subscribeToRoom = roomId => {
    this.setState({ messages: [] })
    this.currentUser
      .subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({ messages: [...this.state.messages, message] })
          }
        }
      })
      .then(room => {
        this.setState({ roomId: room.id })
        this.getRooms()
      })
      .catch(e => console.log('Error subscribing to room', e))
  }
  sendMessage = text => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }
  createRoom = name => {
    this.currentUser
      .createRoom({
        name
      })
      .then(room => this.subscribeToRoom(room.id))
      .catch(e => console.log('error creating room', e))
  }

  render() {
    return (
      <div className="app">
        <RoomList
          roomId={this.state.roomId}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          subscribeToRoom={this.subscribeToRoom}
        />
        <MessageList
          messages={this.state.messages}
          roomId={this.state.roomId}
        />
        <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage}
        />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    )
  }
}

export default App
