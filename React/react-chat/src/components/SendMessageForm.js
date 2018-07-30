import React, { Component } from 'react'

class SendMessageForm extends Component {
  state = {
    message: ''
  }
  handleChange = event => {
    this.setState({ message: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({ message: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          placeholder="Type your message and hit Enter"
          type="text"
          onChange={this.handleChange}
          value={this.state.message}
          disabled={this.props.disabled}
        />
      </form>
    )
  }
}

export default SendMessageForm
