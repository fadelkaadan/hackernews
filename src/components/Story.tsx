import React, { useEffect, useState } from "react";
import { fetchStory } from "../api/hackernews";

interface StoryProps {
  storyId: number;
}

interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
}

const Story = ({ storyId }: StoryProps) => {
  const [story, setStory] = useState<IStory>();

  useEffect(() => {
    fetchStory(storyId).then((data) => setStory(data));
  }, [storyId]);

  const renderStory = () => {
    if (story && story.url) {
      return (
        <li>
          <a href={story.url} target="blank">
            <h4>Title: {story.title}</h4>
          </a>
        </li>
      );
    }
    return null;
  };

  return renderStory();
};

export default Story;
