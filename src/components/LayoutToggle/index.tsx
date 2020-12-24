import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { toggleOneColumnLayout } from "../../store/theme/actions";
import { device } from "../../theme/breakpoints";
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
  const isOneColumnLayout = useSelector(
    (state: RootState) => state.theme.isOneColumnLayout
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    window.localStorage.setItem("isOneColumnLayout", `${!isOneColumnLayout}`);
    dispatch(toggleOneColumnLayout());
  };

  useEffect((): void => {
    const isOneColumnLayoutLocal = window.localStorage.getItem("isOneColumnLayout");
    if (isOneColumnLayoutLocal !== `${isOneColumnLayout}`) {
      dispatch(toggleOneColumnLayout());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Toggle onClick={handleClick}>
      <FontAwesomeIcon icon={faColumns} />
    </Toggle>
  );
};

export default LayoutToggle;
