import React, { Component } from "react";
import { Link } from "react-router-dom";

//import {userContext} from '../../../context/userContext';
//import Button from '@mui/material/Button';

class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/card" className="nav__element">Home</Link>
      <Link to="/listapokemon" className="nav__element">Lista de Pokemons</Link>
    </div>;
  }
}

export default Nav;