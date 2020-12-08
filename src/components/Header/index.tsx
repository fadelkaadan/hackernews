import React from "react";
import styled from "styled-components";
import DarkmodeToggle from "../DarkmodeToggle";
import LayoutToggle from "../LayoutToggle";

interface HeaderProps {
  theme: string;
  themeToggler: () => void;
  layout: string;
  layoutToggler: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
  background-color: ${(props) => props.theme.cards.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({
  theme,
  themeToggler,
  layout,
  layoutToggler,
}: HeaderProps) => {
  return (
    <Wrapper>
      <DarkmodeToggle theme={theme} handleClick={themeToggler} />
      <LayoutToggle layout={layout} handleClick={layoutToggler} />
    </Wrapper>
  );
};

export default Header;
