import React, { Component } from 'react';
// import logo from './logo.svg';
import Synth from './components/Synth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Synth defaultValue={20}/>
      </div>
    );
  }
}

export default App;
