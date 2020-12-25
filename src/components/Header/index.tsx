import React from "react";
import styled from "styled-components";
import Preferences from "../Preferences";

const Wrapper = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.cards.background};
  display: grid;
  grid-template-columns: 1fr 25px [content-start] minmax(100px, 1000px) [content-end] 25px 1fr;
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
