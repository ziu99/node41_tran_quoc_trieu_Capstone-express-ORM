import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav  className='container'>
      <ul className="left">
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
      <ul className="right">
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
