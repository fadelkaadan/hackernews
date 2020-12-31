import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface CommentsProps {
  comments: number[];
  onClick: () => void;
  label: string;
  icon: IconDefinition;
}

const Wrapper = styled.button`
  font-size: 1.2rem;
  color: ${(props) => props.theme.main.text.secondary};
  border: 0.1rem solid ${(props) => props.theme.main.text.secondary};
  background: ${(props) => props.theme.cards.background};
  border-radius: 0.5rem;
  margin: 1.2rem 0 1rem 0;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.main.text.primary};
    border: 0.1rem solid ${(props) => props.theme.main.text.primary};
  }

  &:focus {
    outline: none;
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

const CommentsButton = ({ comments, onClick, label, icon }: CommentsProps) => {
  const getCommentsCount = () => {
    if (comments) return comments.length;
    return 0;
  };

  return getCommentsCount() === 0 ? (
    <WrapperDisabled>
      <FontAwesomeIcon icon={icon} /> {getCommentsCount()} {label}
    </WrapperDisabled>
  ) : (
    <Wrapper onClick={() => onClick()}>
      <FontAwesomeIcon icon={icon} /> {getCommentsCount()} {label}
    </Wrapper>
  );
};

export default CommentsButton;
