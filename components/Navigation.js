import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <ul>
          <li>
            <Link href="/">
              <h3>Pokemon List</h3>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/1">
              <h3>Search Pokemon</h3>
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .flex-container {
    background-color: orangered;
    width: 100%;
    height: 8vh;
    padding: 1rem;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      color: white;
    }
  }
`;

export default Navigation;
