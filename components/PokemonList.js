import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import SinglePokemon from "../components/SinglePokemon";

const PokemonList = ({ pokemon }) => {
  const { loading } = useGlobalContext();

  if (loading) {
    return "Loading...";
  }

  return (
    <Wrapper>
      <div className="center flex-container">
        {pokemon.map((p, index) => {
          return (
            <div key={p}>
              <h3>{p}</h3>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  /* background-color: pink; */

  .flex-container {
    flex-direction: column;
    align-items: center;
  }
`;

export default PokemonList;
