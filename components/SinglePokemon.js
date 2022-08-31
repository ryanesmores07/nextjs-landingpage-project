import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import SearchForm from "./SearchForm";
import styled, { keyframes } from "styled-components";

const url = "https://pokeapi.co/api/v2/pokemon/";

const SinglePokemon = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext("5");

  const [singlePokemon, setSinglePokemon] = useState();

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const { data } = response;
      setSinglePokemon(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [searchTerm]);

  if (!singlePokemon) {
    return "Loading..";
  }
  console.log(singlePokemon);
  return (
    <Wrapper>
      <SearchForm />
      <div className="title">
        <h1 className="name">{singlePokemon.name}</h1>
      </div>

      <div className="flex-container">
        <div className="details">
          <h2>Type: </h2>
          <ul>
            {singlePokemon.types.map((type, index) => {
              return (
                <li className="types" key={index}>
                  • {`${type.type.name}`}
                </li>
              );
            })}
          </ul>

          <h2>Height: </h2>
          <h3>{singlePokemon.height} decimeter</h3>
          <h2>Weight: </h2>
          <h3>{singlePokemon.weight} grams</h3>
        </div>
        <div className="image-container">
          <img
            className="logo"
            src={singlePokemon.sprites.front_default}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: pink; */
  max-width: 100%;
  padding: 2rem;
  margin: 0 auto;

  h1 {
    font-size: 5rem;
    font-family: var(--ff-pokemon);
    /* letter-spacing: 0.3 rem; */
    color: var(--clr-pokemon-1);
    -webkit-text-stroke: 1px var(--clr-pokemon-2);
  }

  h2 {
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
  }

  h3,
  li {
    color: var(--clr-pokemon-2);
  }

  li {
    text-transform: capitalize;
  }

  .title {
    padding-top: 3rem;
    display: flex;
    justify-content: center;

    &:hover {
      transform: rotate(3deg);
    }
  }

  .flex-container {
    width: 100%;
    gap: 3rem;
    /* padding: 2rem; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* border: solid 2px red; */

    .details {
      /* width: 50%; */
      /* border: solid green 2px; */
      h1,
      h2,
      h3 {
        text-transform: capitalize;
      }

      .types {
        line-height: 1;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }

    .image-container {
      border: solid 0.1px var(--clr-pokemon-2);
      border-radius: 10%;
      /* background-color: var(--clr-pokemon-1); */

      img {
        transform: rotate(5deg);

        &:hover {
          transform: rotate(-5deg);
        }
      }
    }
  }
`;

export default SinglePokemon;
