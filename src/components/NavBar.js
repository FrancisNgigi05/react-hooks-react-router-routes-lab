import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const cssStyling = {

  }

  return (
  <div>
    <ul>
      <li>
        <NavLink to="/" exact style={cssStyling}> Home </NavLink>
      </li>
      <li>
        <NavLink to="/movies" style={cssStyling}> Movies </NavLink>
      </li>
      <li>
        <NavLink to="/directors" style={cssStyling}> Directors </NavLink>
      </li>
      <li>
        <NavLink to="/actors" style={cssStyling}> Actors </NavLink>
      </li>
    </ul>
  </div>
  );
}

export default NavBar;
