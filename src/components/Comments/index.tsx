import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import LoadingIndicator from "../../components/LoadingIndicator";
import { IComment } from "../../core/types";

interface CommentsProps {
  data: IComment[];
  isPending: Boolean;
  errorMessage: any;
}

const Wrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  grid-column: content;
`;

const Comments = ({ data, isPending, errorMessage }: CommentsProps) => {
  const renderComments = () =>
    data && data.map((comment) => <Comment key={comment.id} data={comment} />);

  return (
    <Wrapper>
      {isPending ? <LoadingIndicator /> : renderComments()}
    </Wrapper>
  );
};

export default Comments;
