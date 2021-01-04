import React from "react";
import styled from "styled-components";
import Author from "./Author";
import Score from "./Score";
import Time from "./Time";

interface TopInfoProps {
  author: string;
  time: number;
  score?: number;
}

const Wrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.main.text.secondary};
`;

const TopInfo = ({ author, time, score }: TopInfoProps) => {
  return (
    <Wrapper>
      <Author name={author} />
      <Time time={time} />
      {score && <Score count={score} />}
    </Wrapper>
  );
};

export default TopInfo;
