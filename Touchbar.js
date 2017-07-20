import React, { Component } from 'react';
import {
  Button, View,
} from 'react-native-macos';
import SocketIOClient from 'socket.io-client';

import TouchBar from 'react-native-touchbar';

export default class Touchbar extends Component {

  constructor() {
    super();
    this.state = {t: ''};
    this.socket = SocketIOClient('http://localhost:3000', {jsonp: false});
    this.socket.on('message', this.onReceivedMessage);
  }

  onReceivedMessage = (message) => {
    console.log(message)
    this.setState({t: message});
  }

  render() {

    return (
      <TouchBar>
        <Button
          title={this.state.t}
          bezelStyle="rounded"
          onClick={() => this.setState({t: ''})}
        />
      </TouchBar>
    );
  }
}
