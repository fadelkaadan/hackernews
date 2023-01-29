import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserInfo } from "../../api/hackernews";
import { RequestStatus } from "../../commons/enums/requestStatus";
import { StoriesState } from "./storiesSlice";

export interface IUser {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}

interface IUserState {
  info: IUser | null;
  status: RequestStatus;
  error: Object | null;
  stories: StoriesState;
}

const initialState: IUserState = {
  info: null,
  status: RequestStatus.IDLE,
  error: null,

  stories: {
    list: [],
    startAt: 0,
    pending: false,
    error: null,
  },
};

export const fetchUser = createAsyncThunk("user", async (username: string) => {
  try {
    const data = await fetchUserInfo(username);
    return data;
  } catch (e: any) {
    return console.error(e.message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state: IUserState) => {
      state = initialState;
    },
  },
});
