import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/";

const SinglePokemon = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const [singlePokemon, setSinglePokemon] = useState();
  const pokeInputRef = useRef();

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const { data } = response;
      setSinglePokemon(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const pokeSearch = pokeInputRef.current.value;
    setSearchTerm(pokeSearch);
  };

  useEffect(() => {
    fetchPokemon();
  }, [searchTerm]);

  if (!singlePokemon) {
    return "Loading..";
  }

  return (
    <div>
      <form action="input" onSubmit={submitHandler}>
        <input type="text" ref={pokeInputRef} />
      </form>
      <h1>{singlePokemon.name}</h1>
      <h2>Type: </h2>
      {singlePokemon.types.map((type) => {
        console.log(type.type.name);
        return <h3>{`${type.type.name.toUpperCase()}`}</h3>;
      })}
      <h2>Height: {singlePokemon.height}dm</h2>
      <h2>Weight: {singlePokemon.weight}g</h2>
      <img src={singlePokemon.sprites.front_default} alt="" />
    </div>
  );
};

export default SinglePokemon;
