import {
  TOGGLE_PREFERENCES,
  SET_THEME,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
  ThemeState,
  ThemeEnum,
} from "./types";

const localTheme: any = localStorage.getItem("theme");

const initialState: ThemeState = {
  isPreferencesClicked: false,
  theme: localTheme ? localTheme : ThemeEnum.NIGHT,
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
      localStorage.setItem("theme", action.data);
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
