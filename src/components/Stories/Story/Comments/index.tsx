import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface CommentsProps {
  comments: number[];
}

const Wrapper = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.main.text.secondary};
  border: 0.1rem solid ${(props) => props.theme.main.text.secondary};
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.main.text.primary};
    border: 0.1rem solid ${(props) => props.theme.main.text.primary};
  }
`;

const WrapperDisabled = styled(Wrapper)`
  color: ${(props) => props.theme.main.text.disabled};
  border: 0.1rem solid ${(props) => props.theme.main.text.disabled};

  &:hover {
    color: ${(props) => props.theme.main.text.disabled};
    border: 0.1rem solid ${(props) => props.theme.main.text.disabled};
    cursor: default;
  }
`;

const Comments = ({ comments }: CommentsProps) => {
  const getCommentsCount = () => {
    if (comments) return comments.length;
    return 0;
  };

  return getCommentsCount() === 0 ? (
    <WrapperDisabled>
      <FontAwesomeIcon icon={faComment} /> {getCommentsCount()} comments
    </WrapperDisabled>
  ) : (
    <Wrapper>
      <FontAwesomeIcon icon={faComment} /> {getCommentsCount()} comments
    </Wrapper>
  );
};

export default Comments;
