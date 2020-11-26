import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";

interface LinkProps {
  src: string;
}

const Wrapper = styled.div`
  cursor: pointer;
`;

const Button = styled.button`
  font-size: 10px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.main.textColor};

  &:focus {
    outline: none;
    border: none;
  }

  &::after {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    width: 0%; /* Change this to whatever width you want to have before hover. */
    padding-top: 3px; /* This creates some space between the element and the border. */
    border-bottom: 2px solid #785bf7; /* This creates the border. Replace black with whatever color you want. */
    transition: .5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
  }

  &:hover::after {
    width: 100%; /* This will be the new width of your border when on hover */
  }
`;

const Link = ({ src }: LinkProps) => {
  const getHostname = (url: string) => {
    const hostname = new URL(url).hostname.replace("www.", "");
    return hostname;
  };

  const addToClipboard = (text: string) => {
    copy(text);
  };

  return (
    <Wrapper>
      <Button onClick={() => addToClipboard(src)}>
        <FontAwesomeIcon icon={faCopy} /> {getHostname(src)}
      </Button>
    </Wrapper>
  );
};

export default Link;
