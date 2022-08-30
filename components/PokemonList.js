import React from "react";
import styled from "styled-components";
import classes from "./PokemonList.module.css";
import Link from "Next/link";
import { useGlobalContext } from "../context/context";

const PokemonList = ({ pokemon }) => {
  const { loading } = useGlobalContext();

  if (loading) {
    return "Loading...";
  }

  return (
    <Wrapper>
      {pokemon.map((p) => {
        return <h1 key={p}>{p}</h1>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 2rem;
`;

export default PokemonList;
