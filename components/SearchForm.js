import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const pokeInputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const pokeSearch = pokeInputRef.current.value;
    setSearchTerm(pokeSearch);
    pokeInputRef.current.value = "";
  };

  <form action="input" onSubmit={submitHandler}>
    <input type="text" ref={pokeInputRef} />
  </form>;

  return (
    <Wrapper>
      <div className="container">
        <p>Enter Pokemon name or Pokedex number</p>
        <form action="input" onSubmit={submitHandler}>
          <input type="text" ref={pokeInputRef} />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;

  p {
    margin-bottom: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default SearchForm;
