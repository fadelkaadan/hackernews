import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

interface CommentsProps {
  comments: number[];
}

const Wrapper = styled.div`
  font-size: 12px;
  margin-left: 10px;
`

const Comments = ({ comments }: CommentsProps) => {
  const getCommentsCount = () => {
    if (comments) {
      return comments.length
    }
    return 0;
  }

  return (
    <Wrapper>
      <p><FontAwesomeIcon icon={faComment}/> {getCommentsCount()}</p>
    </Wrapper>
  );
};

export default Comments;
