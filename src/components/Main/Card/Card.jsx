import React from 'react'

const Card = (props) => {
   const pokemon = props.data;

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
export default Card;








