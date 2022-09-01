import React from "react";
import SinglePokemon from "../../components/SinglePokemon";
import SearchForm from "../../components/SearchForm";

const PokemonDetail = () => {
  return (
    <div>
      <SearchForm />
      <SinglePokemon />
    </div>
  );
};

export default PokemonDetail;
