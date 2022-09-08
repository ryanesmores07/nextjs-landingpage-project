import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const AppProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("1");

  const [currentPageUrl, setCurrentPageUrl] = useState(allPokemonUrl);

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setCurrentPageUrl,
        searchTerm,
        setSearchTerm,
        pokemon,
        nextPageUrl,
        prevPageUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
