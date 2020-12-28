import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";

interface LinkProps {
  src: string;
}

const Wrapper = styled.div`
  cursor: pointer;
  margin-top: 0.6rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.main.text.secondary};

  &:focus {
    outline: none;
    border: none;
  }

  &::after {
    content: "";
    display: block;
    width: 0%;
    padding-top: 0.3rem;
    border-bottom: 0.2rem solid #785bf7;
    transition: 0.2s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonSuccess = styled(Button)`
  color: #83ad6c;
  &::after {
    border-bottom: 0.2rem solid #83ad6c;
  }

  &:hover::after {
    width: 0%;
  }
`;

const Link = ({ src }: LinkProps) => {
  const [icon, setIcon] = useState(faCopy);
  const [didCopy, setDidCopy] = useState(false);

  const getHostname = (url: string) => {
    const hostname = new URL(url).hostname.replace("www.", "");
    return hostname;
  };

  const addToClipboard = (text: string) => {
    copy(text);
    setIcon(faCheckCircle);
    setDidCopy(true);
    setTimeout(() => {
      setIcon(faCopy);
      setDidCopy(false);
    }, 1500);
  };

  const renderButton = () => {
    if (didCopy) {
      return (
        <ButtonSuccess onClick={() => addToClipboard(src)}>
          <FontAwesomeIcon icon={icon} /> Copied
        </ButtonSuccess>
      );
    }
    return (
      <Button onClick={() => addToClipboard(src)}>
        <FontAwesomeIcon icon={icon} /> {getHostname(src)}
      </Button>
    );
  };

  return <Wrapper>{renderButton()}</Wrapper>;
};

export default Link;
