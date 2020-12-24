import {
  TOGGLE_PREFERENCES,
  SET_THEME,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
  ThemeState,
  ThemeEnum,
} from "./types";

const initialState: ThemeState = {
  isPreferencesClicked: false,
  theme: ThemeEnum.DARK,
  isOneColumnLayout: true,
};

export default (state = initialState, action: ThemeActionTypes): ThemeState => {
  switch (action.type) {
    case TOGGLE_PREFERENCES:
      return {
        ...state,
        isPreferencesClicked: !state.isPreferencesClicked,
      };
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
