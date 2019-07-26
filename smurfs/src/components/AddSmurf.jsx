import React, { useState } from 'react';

import './AddSmurf.css';

const AddSmurf = props => {
  const [state, setState] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = event => {
    event.preventDefault();

    props.postSmurf({...state,
    height: `${state.height}cm`})
    .then(props.history.push('/'))
  }

  const handleChanges = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
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
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};
export default AddSmurf;