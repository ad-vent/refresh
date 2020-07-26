import React from 'react';

import Parser from '../Parser.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Feed',
      entries: [],
      pageNumber: 3,
      limit: 10
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Yeet.</h1>
      </div>
    )
  };
}
