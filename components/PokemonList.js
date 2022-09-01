import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import SinglePokemon from "../components/SinglePokemon";
import Link from "next/link";

const PokemonList = ({ pokemon }) => {
  const { loading } = useGlobalContext();

  if (loading) {
    return "Loading...";
  }

  return (
    <Wrapper>
      <div className="center grid-container">
        {pokemon.map((p, index) => {
          return (
            <ul key={p}>
              <Link href="/SearchPokemon">
                <li>{p}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 5rem;
  margin: 0 auto;
  /* background-color: pink; */

  /* .flex-container {
    flex-direction: column;
    align-items: center;
  } */

  .grid-container {
    margin: 0 auto;
    display: grid;
    place-items: center;
    max-width: 80%;
    grid-auto-flow: column;
    grid-template-rows: repeat(10, 1fr);
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;

export default PokemonList;
