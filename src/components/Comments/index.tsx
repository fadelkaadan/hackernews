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

interface CommentsProps {
  data: IComment[];
}

const Comments = ({ data }: CommentsProps) => {
  return <div>Comments</div>;
};

export default Comments;
