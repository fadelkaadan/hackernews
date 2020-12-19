import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { toggleDarkMode } from "../../store/theme/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.main.text.primary};
  font-size: 25px;
  cursor: pointer;
`;

const DarkmodeToggle = () => {
  const isDarkmode = useSelector((state: RootState) => state.Theme.isDarkmode);
  const dispatch = useDispatch();
  const [icon, setIcon] = useState(faSun);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    setIcon(isDarkmode ? faSun : faMoon);
  }, [isDarkmode]);

  return (
    <Toggle onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </Toggle>
  );
};

export default DarkmodeToggle;
