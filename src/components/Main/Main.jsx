import React, { useContext } from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Card from './Card'
import ListaPokemon from './ListaPokemon'
import Create from './Create'
import { pokemonContext } from '../../context/pokemonContext';

export default function Main() {

  const {unico, pokemon} = useContext(pokemonContext);
  
  // const handleChange = e => {
  //   e.preventDefault();
  //   searchPokemon(e.target.value)
  // }


  // console.log(unico)
  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon"/>
    <h1 className='welcome'> WELCOME TO THE POKEDEX</h1>
             
    <Routes>
    <Route element={
         pokemon.map((poke,i)=><ListaPokemon data={poke} key={i}/>)
         } path='/'/>
       <Route element={<Create/>} path='/newpoke'/>
       <Route element={<Card data={unico}/>} path='/search'/>
    </Routes>
    
    </main>
  )
}


