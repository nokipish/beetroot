import React, { Component } from 'react';

import './styles.js';

export default class Title extends Component {
  render() {
    return (
      <h1>{this.props.title} </h1>
    );
  }
}
