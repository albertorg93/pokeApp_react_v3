// import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter} from 'react-router-dom';
import './styles/styles.scss'
// import { userState, useState } from 'react';
import { useState, useEffect } from 'react';
import {pokemonContext} from './context/pokemonContext';
import axios from 'axios'
import { useDebounce } from "use-debounce";

function App() {
  const [value, setValue] = useState(""); // Para guardar el dato a buscar
  const [pokemon, setPokemons] = useState([]); // Para guardar los posts
  const [unico, setUnico] = useState({});
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 1500);

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput}`);
        const json = res.data;
        setUnico(json)
        setPokemons([json,...pokemon]);
  
      }catch(e){
        setPokemons([]) // No pintes nada
      }
    }
    fetchData();
  }, [debouncedInput]);
 
  const searchPokemon = (value) =>{
    setInput(value)
  }



  const createPoke = (value) => {
    setPokemons([...pokemon, value])
  }

  const pokObj = {
    pokemon,
    unico,
    searchPokemon,
    createPoke
  }

  return (
    <div className="App">
      <BrowserRouter>
      <pokemonContext.Provider value={pokObj}>
      <Header/>
      <Main/>
      </pokemonContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
