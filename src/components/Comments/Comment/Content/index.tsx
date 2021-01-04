import React from "react";
import styled from "styled-components";
import { IComment } from "../../../../core/types";

interface ContentProps {
  data: IComment;
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.main.text.primary};
  text-decoration: none;
  font-size: 1.3rem;
  width: 100%;
  margin: 0;
  line-height: 1.4;
  overflow-wrap: anywhere;

  & a {
    color: ${(props) => props.theme.main.text.primary};
  }

  & code {
    white-space: pre-line;
  }
`;

const Content = ({ data }: ContentProps) => {
  const stringToHTML = (str: string) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.innerHTML;
  };

  return <Wrapper dangerouslySetInnerHTML={{ __html: stringToHTML(data.text) }} />;
};

export default Content;
