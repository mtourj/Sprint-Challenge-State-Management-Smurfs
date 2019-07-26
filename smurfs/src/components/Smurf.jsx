import React from "react";

import './Smurf.css';

const Smurf = ({ smurf, deleting, deleteSmurf }) => {
  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>
      <button disabled={deleting} onClick={() => deleteSmurf(smurf.id)}>Delete</button>
      {
        deleting ? <span>Deleting...</span> : ''
      }
    </div>
  );
};

export default Smurf;
