import { combineReducers } from "redux";
import preferences from "./preferences";
import stories from "./stories";
import comments from "./comments";

const rootReducer = combineReducers({
  preferences,
  stories,
  comments,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
