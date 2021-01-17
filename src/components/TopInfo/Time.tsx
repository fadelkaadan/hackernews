import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { covnvertUnixTimeToDate } from "../../utilities/time";

interface TimeProps {
  time: number;
}

const Wrapper = styled.p`
  margin-right: 1rem;
`;

const Time = ({ time }: TimeProps) => {
  const getTimeAgo = () => {
    const dateObject = covnvertUnixTimeToDate(time);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(dateObject, "round");
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faClock} /> {getTimeAgo()}
    </Wrapper>
  );
};

export default Time;
