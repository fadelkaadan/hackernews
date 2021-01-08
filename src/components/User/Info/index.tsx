import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faBirthdayCake,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { fadeIn, gradientColors } from "../../../theme/animations";
import { IUser } from "../../../core/types";
import { covnvertUnixTimeToDate, months } from "../../../utilities/time";

interface InfoProps {
  data: IUser;
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(-45deg, #fc466b 0%, #3f5efb 100%);
  background-size: 400% 400%;
  animation: ${gradientColors} 5s ease infinite, ${fadeIn} 0.6s ease;
  padding: 2.5rem;
  margin-top: 2.5rem;
  border-radius: ${(props) => props.theme.main.borderRadius};
`;

const Name = styled.h1`
  font-size: 2rem;
`;
const Text = styled.p`
  font-size: 1.2rem;
`;

const Info = ({ data }: InfoProps) => {
  const { id, karma, created } = data;

  const getDate = () => {
    const date = covnvertUnixTimeToDate(created);
    return {
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };
  };

  return (
    <Wrapper>
      <Name>
        <FontAwesomeIcon icon={faUserCircle} /> {id}
      </Name>
      <Text>
        <FontAwesomeIcon icon={faCertificate} /> Karma: {karma}
      </Text>
      <Text>
        <FontAwesomeIcon icon={faBirthdayCake} /> Created:
        {` ${getDate().month} ${getDate().year}`}
      </Text>
    </Wrapper>
  );
};

export default Info;
