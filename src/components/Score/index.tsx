import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

interface ScoreProps {
  count: number;
}

const Wrapper = styled.div`
  font-size: 12px;
`

const Score = ({ count }: ScoreProps) => {
  return (
    <Wrapper>
      <p><FontAwesomeIcon icon={faArrowAltCircleUp}/> {count}</p>
    </Wrapper>
  );
};

export default Score;
