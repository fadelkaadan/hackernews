import React from "react";
import styled from "styled-components";
import Score from "../Score";
import Comments from "../Comments";

interface InteractionsProps {
  score: number;
  comments: number[];
}

const Wrapper = styled.div`
  font-size: 12px;
  display: flex;
  color: ${(props) => props.theme.main.text.primary};
`;

const Interactions = ({ score, comments }: InteractionsProps) => {
  return (
    <Wrapper>
      <Score count={score} />
      <Comments comments={comments} />
    </Wrapper>
  );
};

export default Interactions;
