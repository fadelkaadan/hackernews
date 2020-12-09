import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface CommentsProps {
  comments: number[];
}

const Wrapper = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.main.text.secondary};
  border: 1px solid ${(props) => props.theme.main.text.secondary};
  border-radius: 5px;
  padding: 3px 4px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.main.text.primary};
    border: 1px solid ${(props) => props.theme.main.text.primary};
  }
`;

const Comments = ({ comments }: CommentsProps) => {
  const getCommentsCount = () => {
    if (comments) return comments.length;
    return 0;
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faComment} /> {getCommentsCount()} comments
    </Wrapper>
  );
};

export default Comments;
