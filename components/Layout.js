import React from "react";
import styled from "styled-components";
// import "../asset/main.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <main>{props.children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
