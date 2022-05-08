import React, {useContext} from 'react'
import { pokemonContext } from '../../../context/pokemonContext';
import Card from './Card'

const ListaPokemon = () => {
  const {pokemon} = useContext(pokemonContext);
  return    <section>
              {pokemon.map((poke,i)=><Card data={poke} key={i}/>)}    
              
            </section>
};
export default ListaPokemon;




