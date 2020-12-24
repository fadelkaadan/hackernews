import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.secondary};
  font-size: 30px;
  cursor: pointer;
  grid-column: content;

  &:hover {
    color: ${(props) => props.theme.main.text.primary};
  }
`;

const PreferencesButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faPalette} />
    </Wrapper>
  );
};

export default PreferencesButton;
