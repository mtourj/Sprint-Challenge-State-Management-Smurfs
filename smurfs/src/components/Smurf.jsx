import React from "react";

import './Smurf.css';

const Smurf = ({ smurf }) => {
  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
};

export default Smurf;
