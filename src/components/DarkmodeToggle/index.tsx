import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

interface DarkmodeToggleProps {
  theme: string;
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

const DarkmodeToggle = ({ theme, handleClick }: DarkmodeToggleProps) => {
  const [icon, setIcon] = useState(faSun);

  useEffect(() => {
    setIcon(theme === "dark" ? faSun : faMoon);
  }, [theme]);

  return (
    <Toggle onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </Toggle>
  );
};

export default DarkmodeToggle;
