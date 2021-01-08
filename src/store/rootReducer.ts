import { combineReducers } from "redux";
import preferences from "./preferences";
import stories from "./stories";
import user from "./user";

const rootReducer = combineReducers({
  preferences,
  stories,
  user,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
