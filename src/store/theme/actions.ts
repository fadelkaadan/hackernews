import {
  TOGGLE_DARKMODE,
  TOGGLE_ONE_COLUMN_LAYOUT,
  ThemeActionTypes,
} from "./types";

export const toggleDarkMode = (): ThemeActionTypes => ({
  type: TOGGLE_DARKMODE,
});

export const toggleOneColumnLayout = (): ThemeActionTypes => ({
  type: TOGGLE_ONE_COLUMN_LAYOUT,
});
