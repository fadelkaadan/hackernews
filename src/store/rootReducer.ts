import { combineReducers } from "redux";
import theme from "./theme";
import stories from "./stories";

const rootReducer = combineReducers({
  theme,
  stories,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
