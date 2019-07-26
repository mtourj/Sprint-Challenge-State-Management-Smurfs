import React, { useState } from 'react';

import './AddSmurf.css';

const AddSmurf = props => {
  const [state, setState] = useState({
    name: '',
    age: '',
    height: '',
    error: ''
  })

  const setError = error => {
    setState({
      ...state,
      error
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(!state.name.trim()){
      setError('Name is required!');
      return;
    }
    if(!state.age.trim()){
      setError('Age is required!');
      return;
    }
    if(!state.height.trim()){
      setError('Height is required!');
      return;
    }

    setState({
      ...state,
      name: state.name.trim(),
      age: state.age.trim(),
      height: state.height.trim()
    })

    props.postSmurf({...state,
    height: `${state.height}cm`})
    .then(props.history.push('/'))
  }

  const handleChanges = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      error: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='add-smurf'>
      <label>
        <span className='label'>Name:</span>
        <input name='name' type='text' value={state.name} onChange={handleChanges} />
      </label>
      <label>
        <span className='label'>Age:</span>
        <input name='age' type='number' value={state.age} onChange={handleChanges} />
      </label>
      <label>
        <span className='label'>Height:</span>
        <input name='height' type='number' value={state.height} onChange={handleChanges} />
        <span className='cm-label'>cm</span>
      </label>
      <button type='submit'>SUBMIT</button>
      {
        state.error ? <div className='error'>{state.error}</div> : ''
      }
    </form>
  );
};
export default AddSmurf;