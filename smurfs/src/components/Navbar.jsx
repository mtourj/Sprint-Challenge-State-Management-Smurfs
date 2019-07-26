import React from "react";

import { NavLink } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className='nav-link' activeClassName='active' exact to="/">Smurfs</NavLink>
      <NavLink className='nav-link' activeClassName='active' to="/add">Add Smurf</NavLink>
    </div>
  );
};

export default Navbar;
