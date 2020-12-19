import {
  TOGGLE_DARKMODE,
  TOGGLE_ONE_COLUMN,
  ThemeActionTypes,
  ThemeState,
} from "./types";

const initialState: ThemeState = {
  isDarkmode: true,
  isOneColumnLayout: true,
};

export default (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        isDarkmode: !state.isDarkmode,
      };
    case TOGGLE_ONE_COLUMN:
      return {
        ...state,
        isOneColumnLayout: !state.isOneColumnLayout,
      };
    default:
      return state;
  }
};
