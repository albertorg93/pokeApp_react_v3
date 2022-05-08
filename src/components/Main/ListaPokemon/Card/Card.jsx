import React from 'react'


const Card = (props) => {
   const infopoke = props.data;

  return    <section>
              {infopoke.sprites === undefined? 
                <div>
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Name: {infopoke.name}</p>
                          <p>Id: {infopoke.id}</p>
                          <p>Height: {infopoke.height}</p>
                          <p>Weight: {infopoke.weight}</p>
                          <img className='imagenpoke' src={infopoke.sprites.other.dream_world.front_default} alt='pokemon'/>
                          </div>
                          </section>                                
              }

            </section>
};
export default Card;








