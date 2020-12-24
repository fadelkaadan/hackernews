import React from "react";
import styled from "styled-components";
import PreferencesButton from "../PreferencesButton";

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0px;
  background-color: ${(props) => props.theme.cards.background};
  display: grid;
  grid-template-columns: 1fr 25px [content-start] minmax(100px, 1000px) [content-end] 25px 1fr;
  justify-items: start;
`;

const Header = () => {
  return (
    <Wrapper>
      <PreferencesButton />
    </Wrapper>
  );
};

export default Header;
