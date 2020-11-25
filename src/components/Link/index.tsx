import React from "react";
import styled from "styled-components";

interface LinkProps {
  src: string;
}

const Wrapper = styled.div`
  font-size: 10px;
`;

const Link = ({ src }: LinkProps) => {
  const getHostname = (url: string) => {
    return new URL(url).hostname;
  };

  return (
    <Wrapper>
      <p>{getHostname(src)}</p>
    </Wrapper>
  );
};

export default Link;
