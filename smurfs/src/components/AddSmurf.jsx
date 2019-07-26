import React, { useState } from 'react';

const AddSmurf = props => {
  const [state, setState] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleSubmit = event => {
    event.preventDefault();

    props.postSmurf({...state})
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
        Name:
        <input name='name' value={state.name} onChange={handleChanges} />
      </label>
      <label>
        Age:
        <input name='age' value={state.age} onChange={handleChanges} />
      </label>
      <label>
        Height:
        <input name='height' value={state.height} onChange={handleChanges} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};
export default AddSmurf;