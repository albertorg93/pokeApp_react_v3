import React, {  useEffect, useState } from 'react'
import logopoke from '../../assets/logopoke.png'
import { Route,Routes } from 'react-router-dom'
import Card from './Card'
import ListaPokemon from './ListaPokemon'
import axios from 'axios'

export default function Main() {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemons] = useState([]); // Para guardar los posts
  const [unico, setUnico] = useState({});

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const json = res.data;
        setUnico(json)
        setPokemons([json,...pokemon]);
  
      }catch(e){
        setPokemons([]) // No pintes nada
      }
    }
    fetchData();
  }, [value]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
    e.target.topic.value = ""

  };
  
  console.log(unico)
  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon"/>
    <h1> Bienvenido a la Pokedex</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic" className='busqueda'/>
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


// console.log(user)


