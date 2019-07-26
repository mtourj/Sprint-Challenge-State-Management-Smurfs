import React, { Component } from "react";
import "./App.css";

import { Route } from 'react-router-dom';

import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' render={props => <Smurfs {...props} />} />
        <Route path='/add' render={props => <AddSmurf {...props}/> } />
      </div>
    );
  }
}

export default App;
