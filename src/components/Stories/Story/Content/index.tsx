import React, { useState } from "react";
import styled from "styled-components";
import TopInfo from "../TopInfo";
import Link from "./Link";
import CommentsButton from "../../../../common/CommentsButton";
import CommentsContainer from "../../../../containers/CommentsContainer";
import { IStory } from "../../../../core/types";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

interface ContentProps {
  data: IStory;
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  word-break: break-word;
`;

const Title = styled.a`
  color: ${(props) => props.theme.main.text.primary};
  text-decoration: none;
  font-size: 1.6rem;

  &:visited {
    color: ${(props) => props.theme.main.text.disabled};
  }
`;

const StyledLink = styled.div`
  color: ${(props) => props.theme.main.text.primary};
`;

const Content = ({ data }: ContentProps) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleClick = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <Wrapper>
      <TopInfo time={data.time} score={data.score} />
      <StyledLink>
        <Title href={data.url}>{data.title}</Title>
        <Link src={data.url} />
      </StyledLink>
      <CommentsButton
        comments={data.kids}
        onClick={handleClick}
        label={data.kids && data.kids.length === 1 ? "comment" : "comments"}
        icon={faCommentDots}
      />
      {isCommentsOpen ? <CommentsContainer commentIds={data.kids} /> : null}
    </Wrapper>
  );
};

export default Content;
