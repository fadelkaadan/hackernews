import React, { useState } from "react";
import CommentsContainer from "../../containers/CommentsContainer";
import CommentsButton from "./CommentsButton";
import { faReply } from "@fortawesome/free-solid-svg-icons";

interface RepliesProps {
  data: number[];
}

const Replies = ({ data }: RepliesProps) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleClick = () => {
    setIsCommentsOpen(!isCommentsOpen);
  };

  return (
    <>
      <CommentsButton
        comments={data}
        isOpen={isCommentsOpen}
        onClick={handleClick}
        label={data && data.length === 1 ? "reply" : "replies"}
        icon={faReply}
      />
      {isCommentsOpen ? <CommentsContainer commentIds={data} /> : null}
    </>
  );
};

export default Replies;
