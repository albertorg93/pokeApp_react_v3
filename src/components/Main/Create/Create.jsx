import React, { useContext, useState } from "react";
import { pokemonContext } from '../../../context/pokemonContext';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import './Create.css'

const Create = () => {

  const { register, handleSubmit } = useForm();
  const {createPoke} = useContext(pokemonContext);
  const [created, setPage] = useState(false);

  const onSubmit = data => {
    console.log(data,"esto es data")
    createPoke(data);
    setPage(true);
  }

  if (created) {
    return <Navigate to='/' />
   }
  

  return <div className="create">
    <form onSubmit={handleSubmit(onSubmit)} className="createPokemon">
    
        <label>ID:</label>
        <input {...register("id")} required type='number'/>
     
        <label>NAME:</label>
        <input {...register("name")} minLength='3' required/>
    
        <label>PICTURE:</label>
        <input type="text" {...register("image")} required/>
    
        <label>TYPE:</label>
        <select required {...register("typeOne")}>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
     
        <label>WEIGHT: </label>
        <input {...register("weight")} required type='number'/>
     
      <input type="submit" className="btn-grad"/>
    </form>
  </div>;
};

export default Create;
