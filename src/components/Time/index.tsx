import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

interface TimeProps {
  time: number;
}

const Wrapper = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.main.text.secondary};
`

const Time = ({ time }: TimeProps) => {
  const covnvertUnixTime = () => {
    const unixTimestamp = time;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);

    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(dateObject, "round");
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faClock} /> {covnvertUnixTime()}
    </Wrapper>
  );
};

export default Time;
