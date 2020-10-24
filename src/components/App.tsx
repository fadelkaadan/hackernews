import React, { useEffect, useState } from "react";
import { fetchStoryIds, TOP_STORIES } from "../api/hackernews";
import Story from "./Story";

const App = () => {
  const [storyIds, setStoryIds] = useState<number[]>([]);

  useEffect(() => {
    fetchStoryIds(TOP_STORIES, 10).then((data) => setStoryIds(data));
  }, []);

  return (
    <div>
      <ol>
        {storyIds.map((id) => (
          <Story storyId={id} />
        ))}
      </ol>
    </div>
  );
};

export default App;
