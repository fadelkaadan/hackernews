import React from "react";
import styled from "styled-components";

interface AuthorProps {
  name: string;
}

const Wrapper = styled.div`
  font-size: 1.2rem;
`

const Author = ({ name }: AuthorProps) => {
  return (
    <Wrapper>
      <p>by {name}</p>
    </Wrapper>
  );
};

export default Author;
