import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context/context";

const HomePage = () => {
  const { loading, pokemon, nextPageUrl, prevPageUrl } = useGlobalContext();

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return "Loading..";

  return (
    <div>
      <SearchForm />
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
};

export default HomePage;
