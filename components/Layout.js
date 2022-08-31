import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Wrapper>
      <Navigation />
      <main>{props.children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
