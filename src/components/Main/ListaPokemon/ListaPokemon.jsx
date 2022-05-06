import React from 'react'

const ListaPokemon = (props) => {
   const pokemon = props.data;
   console.log(pokemon)

  return    <section>
             
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
export default ListaPokemon;




// {
//   pokemons.map((pokemon, index) => {
//       return <div key={index} pokemon={pokemon}/> </div>
//   })
// }





