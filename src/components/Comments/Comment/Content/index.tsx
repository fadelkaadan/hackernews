import React, { useState } from "react";
import styled from "styled-components";
import CommentsContainer from "../../../../containers/CommentsContainer";
import CommentsButton from "../../../../common/CommentsButton";
import TopInfo from "../TopInfo";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { IComment } from "../../../../core/types";

interface ContentProps {
  data: IComment;
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Text = styled.div`
  color: ${(props) => props.theme.main.text.primary};
  text-decoration: none;
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.4;
  overflow-wrap: anywhere;

  & a {
    color: ${(props) => props.theme.main.text.primary};
  }
`;

const Content = ({ data }: ContentProps) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleClick = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  const stringToHTML = (str: string) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.innerHTML;
  };

  return (
    <Wrapper>
      <TopInfo author={data.by} time={data.time} />
      <Text dangerouslySetInnerHTML={{ __html: stringToHTML(data.text) }} />
      <CommentsButton
        comments={data.kids}
        onClick={handleClick}
        label={data.kids && data.kids.length === 1 ? "reply" : "replies"}
        icon={faReply}
      />
      {isCommentsOpen ? <CommentsContainer commentIds={data.kids} /> : null}
    </Wrapper>
  );
};

export default Content;
