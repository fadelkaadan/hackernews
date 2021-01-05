import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.cards.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${(props) => props.theme.main.text.secondary};

  a {
    color: ${(props) => props.theme.main.text.secondary};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        <FontAwesomeIcon icon={faUserCircle} /> Built By <a href={"https://github.com/fadelkaadan"}>Fadel Kaadan</a>
      </Text>
    </Wrapper>
  );
};

export default Footer;
