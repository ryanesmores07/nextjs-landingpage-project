import React from "react";
import SinglePokemon from "../../../components/SinglePokemon";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../../context/context";
const ClickedPokemon = () => {
  const { setSearchTerm } = useGlobalContext();
  const router = useRouter();
  const pokeName = router.query.pokeName;
  setSearchTerm(pokeName);

  return (
    <div>
      <SinglePokemon pokeName={pokeName} />
    </div>
  );
};

export default ClickedPokemon;
