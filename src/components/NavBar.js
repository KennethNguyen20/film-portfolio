import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div className="top-row">
        <NavLink exact to="/" className="logo">KENNETH NGUYEN</NavLink>
        <NavLink exact to="/" className="subtitle">CINEMATOGRAPHER</NavLink>
      </div>
      <div className="bottom-row">
        {/* <NavLink to="/" className="nav-link">Featured</NavLink> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/narrative">Narrative</NavLink>
        <NavLink to="/about">About</NavLink>
        
      </div>
    </div>
  );
}

export default NavBar;

