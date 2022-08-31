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
  padding: 2rem;

  .flex-container {
    justify-content: center;
    gap: 2rem;
  }
`;

export default Pagination;
