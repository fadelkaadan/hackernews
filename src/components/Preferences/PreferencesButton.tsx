import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { togglePreferences } from "../../store/preferences/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { fadeIn } from "../../theme/animations";

const Wrapper = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.secondary};
  font-size: 2.8rem;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.main.text.primary};
  }
`;

const PreferencesButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(togglePreferences());
  };

  return (
    <Wrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faPalette} />
    </Wrapper>
  );
};

export default PreferencesButton;
