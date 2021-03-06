import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchStoryIds = async (category: string) => {
  const result = await axios
    .get(`${BASE_URL}/${category}.json`)
    .then(({ data }) => data);
  return result;
};

export const fetchItem = async (id: number) => {
  const result = await axios
    .get(`${BASE_URL}/item/${id}.json`)
    .then(({ data }) => data);
  return result;
};

export const fetchUserInfo = async (username: string) => {
  const result = await axios
    .get(`${BASE_URL}/user/${username}.json`)
    .then(({ data }) => data);
  return result;
};
