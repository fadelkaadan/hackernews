import React from "react";

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
  author: string;
  subcomments: IComment[];
  text: string;
  time: number;
}

const Comment = ({ author, subcomments, text, time }: CommentProps) => {
  return <div>Comment</div>;
};

export default Comment;
