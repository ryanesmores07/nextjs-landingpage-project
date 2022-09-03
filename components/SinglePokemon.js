import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";

import styled from "styled-components";

const singlePokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const SinglePokemon = ({ pokeName }) => {
  const { searchTerm } = useGlobalContext();

  const [singlePokemon, setSinglePokemon] = useState();

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`${singlePokemonUrl}${searchTerm}`);
      const { data } = response;
      setSinglePokemon(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [searchTerm]);

  if (!singlePokemon || !searchTerm) {
    return "Loading..";
  }
  // console.log(singlePokemon);
  return (
    <Wrapper>
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
          <ul>
            <li>{singlePokemon.height} decimeter</li>
          </ul>
          <h2>Weight: </h2>
          <ul>
            <li>{singlePokemon.weight} grams</li>
          </ul>
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
  padding: 0 2rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    font-family: var(--ff-secondary);
  }

  h3,
  li {
    color: var(--clr-pokemon-2);
  }

  li {
    font-weight: 400;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
  }

  .title {
    padding-top: 3rem;
    display: flex;
    justify-content: center;

    .name {
      font-size: 5rem;
      font-family: var(--ff-pokemon);
      /* letter-spacing: 0.3 rem; */
      color: var(--clr-pokemon-1);
      -webkit-text-stroke: 2px var(--clr-pokemon-2);

      &:hover {
        transform: rotate(3deg);
        transition: all 0.01s linear;
      }
    }
  }

  .flex-container {
    width: 100%;
    gap: 5rem;
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
    }

    .image-container {
      border: outset 1rem var(--clr-pokemon-2);
      border-radius: 10%;
      box-shadow: 3px 3px 3px 0.1px #888888;

      &:hover {
        box-shadow: 5px 7px 10px 1px #888888;
      }
      img {
        transform: rotate(3deg);

        &:hover {
          transform: rotate(-3deg);
          transition: all 0.01s linear;
        }
      }
    }
  }

  @media (min-width: 450px) {
    .title {
      .name {
        font-size: 7rem;
      }
    }

    .flex-container {
      h2 {
        font-size: 2.5rem;
      }

      li {
        font-size: 1.5rem;
      }

      img {
        width: 15rem;
      }
    }
  }

  @media (min-width: 768px) {
    .title {
      .name {
        font-size: 9rem;
      }
    }

    .flex-container {
      h2 {
        font-size: 3rem;
      }
      li {
        font-size: 2rem;
      }
      img {
        width: 17rem;
      }
    }
  }

  @media (min-width: 1170px) {
    .title {
      .name {
        font-size: 15rem;
      }
    }

    .flex-container {
      gap: 6rem;
      h2 {
        font-size: 5rem;
      }
      li {
        font-size: 2.5rem;
      }
      img {
        width: 22rem;
      }
    }
  }
`;

export default SinglePokemon;
