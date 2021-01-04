import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../theme/animations";
import Content from "./Content";
import TopInfo from "../../TopInfo";
import { IComment } from "../../../core/types";
import Replies from "../Replies";

interface CommentProps {
  data: IComment;
}

const Wrapper = styled.div`
  color: #e7e7e7;
  width: 100%;
  padding: 0.5rem 0 0.5rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: ${(props) => props.theme.cards.background};
  animation: ${fadeIn} 0.5s ease;
  border-left: 1px solid ${(props) => props.theme.main.text.secondary};
`;

const Comment = ({ data }: CommentProps) => {
  return data.text ? (
    <Wrapper>
      <TopInfo author={data.by} time={data.time} />
      <Content data={data} />
      <Replies data={data.kids} />
    </Wrapper>
  ) : null;
};

export default Comment;
