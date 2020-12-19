import { combineReducers } from "redux";
import Theme from "./theme";

const rootReducer = combineReducers({
  Theme,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
