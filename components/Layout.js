import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Wrapper>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
