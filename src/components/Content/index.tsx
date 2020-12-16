import React from "react";
import styled from "styled-components";
import TopInfo from "../TopInfo";
import Link from "../Link";
import Comments from "../Comments";

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

const Content = ({ story }: any) => {
  return (
    <Wrapper>
      <TopInfo time={story.time} score={story.score}/>
            <StyledLink>
              <Title href={story.url}>{story.title}</Title>
              <Link src={story.url} />
            </StyledLink>
            <Comments comments={story.kids} />
    </Wrapper>
  );
};

export default Content;
