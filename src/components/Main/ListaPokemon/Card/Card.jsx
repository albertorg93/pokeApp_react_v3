import React from 'react'


const Card = (props) => {
   const infopoke = props.data;
   console.log(infopoke,"pokemon desde card")
  return    <section>
              {infopoke === undefined? 
                <div>
                  <h1>holaa</h1>
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Id: {infopoke.id}</p>
                          <p>Name: {infopoke.name}</p>
                          {/* <img className='imagenpoke' src={infopoke.sprites.other.dream_world.front_default} alt='pokemon'/> */}
                          {/* <p>Type: {infopoke.types[0].type.name}</p> */}
                          <p>Weight: {infopoke.weight}</p>
                          
                          </div>
                          </section>                                
               }

            </section>
};
export default Card;








