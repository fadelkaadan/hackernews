import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleOneColumnLayout } from "../../store/theme/actions";
import { device } from "../../theme/Breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns } from "@fortawesome/free-solid-svg-icons";

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.primary};
  font-size: 25px;
  display: none;
  cursor: pointer;

  @media ${device.laptop} {
    display: block;
  }
`;

const LayoutToggle = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleOneColumnLayout());
  };

  return (
    <Toggle onClick={handleClick}>
      <FontAwesomeIcon icon={faColumns} />
    </Toggle>
  );
};

export default LayoutToggle;
