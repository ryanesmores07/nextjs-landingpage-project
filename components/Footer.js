import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex-container">
        <ul>
          <li>Made with NextJS</li>
          <li>
            © <a href="https://www.instagram.com/ryanghostlean/">Ryan E.</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: orangered;
  color: white;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;

  .flex-container {
    justify-content: center;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1170px) {
    font-size: 2rem;
  }
`;

export default Footer;
