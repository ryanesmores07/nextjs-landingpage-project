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

    column-gap: 5rem;
    place-items: center;
    justify-content: space-evenly;
    max-width: 90%;
    grid-auto-flow: column;
    grid-template-rows: repeat(10, 1fr);
    text-transform: capitalize;
    font-weight: 400;
    font-family: var(--ff-pokemon);

    li {
      font-size: 2.5rem;
      color: var(--clr-pokemon-1);
      -webkit-text-stroke: 1.5px var(--clr-pokemon-2);
    }

    .link {
      cursor: pointer;

      &:hover {
        color: var(--clr-pokemon-2);
        font-size: 2rem;
        transition: 0.01s all ease-in;
      }
    }
  }

  @media (min-width: 768px) {
    .grid-container {
      li {
        font-size: 3.5rem;
        &:hover {
          font-size: 3rem;
        }
      }
    }
  }

  @media (min-width: 1170px) {
    .grid-container {
      li {
        font-size: 4rem;
        &:hover {
          font-size: 3.5rem;
        }
      }
    }
  }
`;

export default PokemonList;
