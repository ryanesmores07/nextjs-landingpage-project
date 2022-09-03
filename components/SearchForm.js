import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const pokeInputRef = useRef("");

  React.useEffect(() => {
    pokeInputRef.current.focus();
  }, []);

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
      <div className="flex-container">
        <form action="input" onSubmit={submitHandler}>
          <div className="form-control flex-container">
            <label htmlFor="name">Enter Pokemon name or Pokedex number</label>
            <input type="text" id="name" ref={pokeInputRef} />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  padding-top: 5rem;

  p {
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .flex-container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .form-control {
      padding: 1.5rem 2rem;
      font-size: 0.8rem;
      border: 1px dotted #888888;
      box-shadow: 1px 1px #888888;
      label {
        font-weight: 400;
      }
      &:hover {
      }
    }
  }

  @media (min-width: 450px) {
    p {
      font-size: 1.2rem;
    }
    .flex-container {
      .form-control {
        padding: 2rem 3rem;
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.6rem;
    }
    .flex-container {
      .form-control {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1170px) {
    p {
      font-size: 1.8rem;
    }
    .flex-container {
      .form-control {
        font-size: 2rem;
      }
    }
  }
`;

export default SearchForm;
