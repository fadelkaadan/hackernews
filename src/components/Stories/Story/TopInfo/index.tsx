import React from "react";
import styled from "styled-components";
import Score from "./Score";
import Time from "./Time";

interface TopInfoProps {
  time: number;
  score: number;
}

const Wrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.main.text.secondary};
`;

const TopInfo = ({ time, score }: TopInfoProps) => {
  return (
    <Wrapper>
      <Time time={time}/>
      <Score count={score} />
    </Wrapper>
  );
};

export default TopInfo;
