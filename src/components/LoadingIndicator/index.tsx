import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { spin, fadeIn } from "../../theme/animations";

const Spinner = styled.p`
  font-size: 50px;
  color: ${(props) => props.theme.main.text.secondary};
  animation: ${spin} 2s linear infinite, ${fadeIn} 0.5s;
`;

const LoadingIndicator = () => {
  return (
    <Spinner>
      <FontAwesomeIcon icon={faSpinner} />
    </Spinner>
  );
};

export default LoadingIndicator;
