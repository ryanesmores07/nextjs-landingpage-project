import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <ul>
          <Link href="/">
            <li>Pokemon List</li>
          </Link>
        </ul>
        <ul>
          <Link href="/SearchPokemon">
            <li>Search Pokemon</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .flex-container {
    background-color: orangered;
    width: 100%;
    /* height: 8vh; */
    padding: 1rem;
    margin: 0 auto;
    justify-content: space-evenly;
    /* align-items: flex-end; */

    li {
      color: white;

      &:hover {
        color: var(--clr-pokemon-2);
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
    li {
      font-size: 2rem;
    }
  }

  @media (min-width: 1170px) {
    li {
      font-size: 2.3rem;
    }
  }
`;

export default Navigation;
