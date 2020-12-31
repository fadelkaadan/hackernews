import React, { useEffect, useState } from "react";
import Comments from "../../components/Comments";
import { fetchItem } from "../../api/hackernews";
import { IComment } from "../../core/types";

interface CommentsContainerProps {
  commentIds: number[];
}

const CommentsContainer = ({ commentIds }: CommentsContainerProps) => {
  const [comments, setComments]: any = useState<IComment[]>([]);
  const [isPending, setIsPending]: any = useState<Boolean>(false);

  useEffect(() => {
    const fetchComments = async () => {
      setIsPending(true);
      const data: Promise<IComment>[] = await commentIds.map(
        async (id: number) => await fetchItem(id)
      );
      setComments(await Promise.all(data));
      setIsPending(false);
    };
    fetchComments();
  }, [commentIds]);

  return (
    <Comments
      data={comments}
      isPending={isPending}
      errorMessage={"errorMessage"}
    />
  );
};

export default CommentsContainer;
