import React from 'react'


const Card = (props) => {
   const infopoke = props.data;
   console.log(infopoke,"pokemon desde card")
  return    <section>
              {infopoke.image === undefined? 
                <div>
                </div>: 
                          <section className="searchedPoke">
                          <div className='pokeinfo'>
                          <p>Id: {infopoke.id}</p>
                          <p>Name: {infopoke.name}</p>
                          <img className='imagenpoke' src={infopoke.image} alt='pokemon'/>
                          <p>Type: {infopoke.typeOne}</p>
                          <p>Weight: {infopoke.weight}</p>
                          
                          </div>
                          </section>                                
               }

            </section>
};
export default Card;








