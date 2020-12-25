import React from "react";
import { useDispatch } from "react-redux";
import { togglePreferences } from "../../store/preferences/actions";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const onRenderAnimation = keyframes`
  0% {
		opacity: 0;
  }
	100% {
		opacity: 1;
	}
`;

const Wrapper = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.secondary};
  font-size: 28px;
  cursor: pointer;
  animation: ${onRenderAnimation} 0.3s ease;

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
