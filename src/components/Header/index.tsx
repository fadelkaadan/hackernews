import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 5vh;
  width: 100%;
  background-color: red;
`;

const Header = ({ themeToggler }: any) => {
  return (
    <Wrapper>
      <button onClick={themeToggler}>Toggle</button>
    </Wrapper>
  );
};

export default Header;
