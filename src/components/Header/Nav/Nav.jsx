import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">GO HOME</Link>
       <Link to="/search" className="nav__element">SEARCH POKEMON</Link>
      <Link to="/lista" className="nav__element">LIST OF POKEMONS</Link>
      <Link to="/new" className="nav__element">CREATE POKEMON</Link>
      
    </div>;
  }
}

export default Nav;