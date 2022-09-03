import React from "react";
import styled from "styled-components";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <Wrapper>
      <div className="flex-container">
        {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
        {goToNextPage && <button onClick={goToNextPage}>Next</button>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 3rem;

  .flex-container {
    justify-content: center;
    gap: 2rem;

    button {
      padding: 0.3rem 0.8rem;
      box-shadow: 2px 2px #888888;
      cursor: pointer;

      &:hover {
        background-color: var(--clr-pokemon-2);
        color: white;
      }
    }
  }

  @media (min-width: 1170px) {
    .flex-container {
      button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
`;

export default Pagination;
