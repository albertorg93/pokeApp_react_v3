import React, { useContext } from 'react'
import { pokemonContext } from '../../../context/pokemonContext';


const Card = (props) => {
   const pokemon = props.data;
   const {searchPokemon} = useContext(pokemonContext);
   const handleChange = e => {
    e.preventDefault();
    searchPokemon(e.target.value)
  }

  return    <section>
              <form>
                <input name="topic" className='busqueda' onChange={handleChange} />
              </form>
              {pokemon.sprites === undefined? 
                <div>
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Name: {pokemon.name}</p>
                          <p>Id: {pokemon.id}</p>
                          <p>Height: {pokemon.height}</p>
                          <p>Weight: {pokemon.weight}</p>
                          <img className='imagenpoke' src={pokemon.sprites.other.dream_world.front_default} alt='pokemon'/>
                          </div>
                          </section>                                
              }

            </section>
};
export default Card;








