import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

interface ScoreProps {
  count: number;
}

const Wrapper = styled.p`
`;

const Score = ({ count }: ScoreProps) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faArrowAltCircleUp} /> {count}
    </Wrapper>
  );
};

export default Score;
