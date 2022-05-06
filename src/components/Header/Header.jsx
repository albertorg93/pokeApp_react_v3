import React, { Component } from 'react'
import Nav from './Nav'
import logo from '../../assets/logopoke.png'
export class Header extends Component {
  render() {
    return (
      <header className='header'>
         <img src={logo} alt='logo' style={{width: 100}}></img>
        <Nav/>
 
        </header>
    )
  }
}
export default Header