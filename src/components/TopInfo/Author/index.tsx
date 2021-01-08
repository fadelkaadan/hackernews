import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

interface AuthorProps {
  name: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const AuthorName = styled(Link)`
  color: ${(props) => props.theme.main.text.secondary};
  text-decoration: none;
  margin-left: 0.5rem;
`;

const Author = ({ name }: AuthorProps) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faUserCircle} />
      <AuthorName to={`/users/${name}`}>{name}</AuthorName>
    </Wrapper>
  );
};

export default Author;
