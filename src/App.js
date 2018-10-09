import React, { Component } from 'react';

import './styles/main.scss'
import FontObserver from './FontObserver'

class App extends Component {
  componentDidMount() {
    FontObserver()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default App;
