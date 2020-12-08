import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from '@fortawesome/free-solid-svg-icons'

interface LayoutToggleProps {
  layout: string;
  handleClick: () => void;
}

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.primary};
  font-size: 25px;
  cursor: pointer;
`;

const LayoutToggle = ({layout, handleClick}: LayoutToggleProps) => {
  return (
    <Toggle onClick={handleClick}>
      <FontAwesomeIcon icon={faColumns} />
    </Toggle>
  );
};

export default LayoutToggle;
