import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../theme/animations";
import Content from "./Content";

interface IComment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

interface CommentProps {
  data: IComment;
}

const Wrapper = styled.div`
  color: #e7e7e7;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.cards.background};
  animation: ${fadeIn} 0.5s ease;
  border-left: 1px solid ${(props) => props.theme.main.text.secondary};
`;

const Comment = ({ data }: CommentProps) => {
  return data.text ? (
    <Wrapper>
      <Content data={data} />
    </Wrapper>
  ) : null;
};

export default Comment;
