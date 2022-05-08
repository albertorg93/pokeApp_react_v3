import React from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Form from './Form'
import ListaPokemon from './ListaPokemon'
import Create from './Create'
import Home from './Home'

export default function Main() {

  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon"/>
    <h1 className='welcome'> WELCOME TO THE POKEDEX</h1>
             
    <Routes>
       <Route element={<Home/>} path='/'/>
       <Route element={<Form/>} path='/search'/>
       <Route element={<ListaPokemon/>}  path='/lista'/>
       <Route element={<Create/>} path='/new'/>
       
    </Routes>
    
    </main>
  )
}


