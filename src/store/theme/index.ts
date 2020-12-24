import {
  SET_THEME,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
  ThemeState,
  ThemeEnum,
} from "./types";

const initialState: ThemeState = {
  theme: ThemeEnum.DARK,
  isOneColumnLayout: true,
};

export default (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.data,
      };
    case TOGGLE_ONE_COLUMN_LAYOUT:
      return {
        ...state,
        isOneColumnLayout: !state.isOneColumnLayout,
      };
    default:
      return state;
  }
};
