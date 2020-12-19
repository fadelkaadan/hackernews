import { combineReducers } from "redux";
import Theme from "./theme";

const rootReducer = combineReducers({
  Theme,
});

export type RootState = ReturnType<typeof rootReducer>;
