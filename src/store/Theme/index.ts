import {
  TOGGLE_DARKMODE,
  TOGGLE_ONE_COLUMN,
  ThemeActionTypes,
  ThemeState,
} from "./types";

const initialState: ThemeState = {
  darkmode: true,
  oneColumn: true,
};

export default (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case TOGGLE_ONE_COLUMN:
      return {
        ...state,
        oneColumn: !state.oneColumn,
      };
    default:
      return state;
  }
};
