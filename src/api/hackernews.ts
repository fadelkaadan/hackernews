import axios from "axios";

export const TOP_STORIES = "topstories";
export const BEST_STORIES = "beststories";
export const NEW_STORIES = "newstories";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchStoryIds = async (category: string, limit: number) => {
  const result = await axios
    .get(`${BASE_URL}/${category}.json`)
    .then(({ data }) => data);
  return result.slice(0, limit);
};

export const fetchStory = async (id: number) => {
  const result = await axios
    .get(`${BASE_URL}/item/${id}.json`)
    .then(({ data }) => data);
  return result;
};
