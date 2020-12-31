import { combineReducers } from "redux";
import preferences from "./preferences";
import stories from "./stories";

const rootReducer = combineReducers({
  preferences,
  stories,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
