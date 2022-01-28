import {
  TOGGLE_PREFERENCES,
  SET_THEME,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
  ThemeEnum,
} from "./types";

export const togglePreferences = (): ThemeActionTypes => ({
  type: TOGGLE_PREFERENCES,
});

export const setTheme = (theme: ThemeEnum): ThemeActionTypes => ({
  type: SET_THEME,
  data: theme,
});

export const toggleOneColumnLayout = (): ThemeActionTypes => ({
  type: TOGGLE_ONE_COLUMN_LAYOUT,
});
