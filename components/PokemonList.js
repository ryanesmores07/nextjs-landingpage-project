import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import Link from "next/link";
import { useRouter } from "next/router";

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
            <ul key={p} className="link">
              <Link href={`/find-pokemon/${p}`}>
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

    .link {
      cursor: pointer;

      &:hover {
        color: var(--clr-pokemon-2);
        font-size: 1.8rem;
        transition: 0.01s all ease-in;
      }
    }
  }
`;

export default PokemonList;
