import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.p`
  font-size: 50px;
  color: ${(props) => props.theme.main.text.secondary};
  animation: ${spin} 2s linear infinite;
`;

const LoadingIndicator = () => {
  return (
    <Spinner>
      <FontAwesomeIcon icon={faSpinner} />
    </Spinner>
  );
};

export default LoadingIndicator;
