import React from "react";
import styled from "styled-components";
import ThemePreferences from "./ThemePreferences";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 25px [content-start] minmax(100px, 1000px) [content-end] 25px 1fr;
  justify-items: start;
  background-color: ${(props) => props.theme.cards.background};
  color: ${(props) => props.theme.main.text.primary};
  border-top: 10px solid ${(props) => props.theme.main.background};
`;

const Preferences = () => {
  return (
    <Wrapper>
      <ThemePreferences />
    </Wrapper>
  );
};

export default Preferences;
