import {
  SET_THEME,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
  ThemeEnum,
} from "./types";

export const toggleDarkMode = (theme: ThemeEnum): ThemeActionTypes => ({
  type: SET_THEME,
  data: theme,
});

export const toggleOneColumnLayout = (): ThemeActionTypes => ({
  type: TOGGLE_ONE_COLUMN_LAYOUT,
});
