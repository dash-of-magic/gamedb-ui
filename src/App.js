import React, { Component } from 'react';
import Router from './Routes';

class App extends Component {
  constructor(props){
    super(props);
    document.title = process.env.PAGE_TITLE || 'GameDB';
  }

  render() {
    return (
      <Router/>
    );
  }
}

export default App;
