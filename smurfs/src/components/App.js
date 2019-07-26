import React from "react";
import "./App.css";

import { Route } from 'react-router-dom';

import { postSmurf } from '../actions';

import { connect } from 'react-redux';

import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import Navbar from './Navbar';

const App = props => {
  const postSmurf = (smurf) => {
    return props.postSmurf(smurf);
  }

  return (
      <div className="App">
        <Navbar />
        <Route exact path='/' render={props => <Smurfs {...props} />} />
        <Route path='/add' render={props => <AddSmurf postSmurf={postSmurf} {...props}/> } />
      </div>
    );
}

export default connect(state => ({...state}), { postSmurf })(App);
