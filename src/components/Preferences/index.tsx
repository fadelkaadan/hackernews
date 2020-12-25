import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import styled from "styled-components";
import PreferencesButton from "./PreferencesButton";
import ThemePreferences from "./ThemePreferences";

const Wrapper = styled.div`
  color: ${(props) => props.theme.main.text.primary};
  width: 150px;
  grid-column: content;
  display: flex;
  justify-content: center;
`;

const Preferences = () => {
  const show = useSelector(
    (state: RootState) => state.preferences.isPreferencesClicked
  );

  return (
    <Wrapper>{show ? <ThemePreferences /> : <PreferencesButton />}</Wrapper>
  );
};

export default Preferences;
