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
  const [pokemon, setPokemons] = useState([]); // Para guardar los posts
  const [unico, setUnico] = useState({});
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 1500);

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      //  console.log(pokemon[pokemon.length-1],"este es el ultimo pokemon buscado")
   if(pokemon.length === 0 || pokemon.every((pokeInfo) => pokeInfo.name !== debouncedInput)){
      try{
        // Petición HTTP  
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedInput}`);
        const json = res.data;
        const poke = {
          name: json.name,
          id: json.id,
          image: json.sprites.other.dream_world.front_default,
          // image1: data.sprites.back_default,
          // image2: data.sprites.front_shiny,
          // image3: data.sprites.back_shiny,
          typeOne: json.types[0].type.name,
          // typeTwo: data.types.length > 1 ? data.types[1].type.name : null,
          weight: json.weight,
        };
        setUnico(poke)
        setPokemons([poke,...pokemon]);
      }catch(e){
        setPokemons([]) // No pintes nada
      }
    }else {
      alert('you already have this pokemon registered in your pokedex!')
    }
    }
    fetchData();
  },
  // eslint-disable-next-line
   [debouncedInput]
   );
 
  const searchPokemon = (value) =>{
    setInput(value)
  }



  const createPoke = (value) => {
    setPokemons([value,...pokemon])
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
