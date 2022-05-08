import React, { Component } from "react";
import { Link } from "react-router-dom";

//import {userContext} from '../../../context/userContext';
//import Button from '@mui/material/Button';

class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">LIST OF POKEMONS</Link>
      <Link to="/newpoke" className="nav__element">CREATE POKEMON</Link>
      <Link to="/search" className="nav__element">SEARCH POKEMON</Link>
      
    </div>;
  }
}

export default Nav;