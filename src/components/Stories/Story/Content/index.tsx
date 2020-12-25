import React from "react";
import styled from "styled-components";
import TopInfo from "../TopInfo";
import Link from "./Link";
import Comments from "../Comments";

interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface ContentProps {
  data: IStory;
}

const Wrapper = styled.div`
  padding: 5px 15px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Title = styled.a`
  color: ${(props) => props.theme.main.text.primary};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme.main.text.disabled};
  }
`;

const StyledLink = styled.div`
  color: ${(props) => props.theme.main.text.primary};
`;

const Content = ({ data }: ContentProps) => {
  return (
    <Wrapper>
      <TopInfo time={data.time} score={data.score} />
      <StyledLink>
        <Title href={data.url}>{data.title}</Title>
        <Link src={data.url} />
      </StyledLink>
      <Comments comments={data.kids} />
    </Wrapper>
  );
};

export default Content;
