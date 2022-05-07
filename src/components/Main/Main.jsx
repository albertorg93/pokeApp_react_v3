import React, { useContext } from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Card from './Card'
import ListaPokemon from './ListaPokemon'
import { pokemonContext } from '../../context/pokemonContext';

export default function Main() {

  const {searchPokemon, unico, pokemon} = useContext(pokemonContext);
  
  const handleChange = e => {
    e.preventDefault();
    searchPokemon(e.target.value)
  }


  console.log(unico)
  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon"/>
    <h1> Bienvenido a la Pokedex</h1>
              <form>
                <input name="topic" className='busqueda' onChange={handleChange} />
              </form>
    <Routes>
       <Route element={<Card data={unico}/>} path='/card'/>
    <Route element={
      pokemon.map((poke,i)=><ListaPokemon data={poke} key={i}/>)
    } path='/listapokemon'/>
    </Routes>
    
    </main>
  )
}


