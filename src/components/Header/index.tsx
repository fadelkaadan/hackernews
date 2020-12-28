import React from "react";
import styled from "styled-components";
import Preferences from "../Preferences";

const Wrapper = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.cards.background};
  display: grid;
  grid-template-columns: 1fr 2.5rem [content-start] minmax(200px, 100rem) [content-end] 2.5rem 1fr;
  justify-items: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Preferences />
    </Wrapper>
  );
};

export default Header;
