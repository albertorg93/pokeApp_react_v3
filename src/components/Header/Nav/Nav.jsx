import React, { Component } from "react";
import { Link } from "react-router-dom";

//import {userContext} from '../../../context/userContext';
//import Button from '@mui/material/Button';

class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/newpoke" className="nav__element">Create a pokemon</Link>
      <Link to="/card" className="nav__element">Search a pokemon</Link>
      <Link to="/listapokemon" className="nav__element">List of Pokemons</Link>
    </div>;
  }
}

export default Nav;