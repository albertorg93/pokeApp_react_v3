import React, { useContext } from 'react'
  import { pokemonContext } from '../../../context/pokemonContext';
  import Card from './../ListaPokemon/Card'

const Form = () => {

  const {searchPokemon,unico} = useContext(pokemonContext);
  const handleChange = e => {
   e.preventDefault();
   searchPokemon(e.target.value)
 }
  return     <section>
             <form>
             <input name="topic" className='busqueda' onChange={handleChange} />
             <Card data={unico}/>
             </form>
             
            </section>
     
  ;
};

export default Form;
