import { TOGGLE_DARKMODE, TOGGLE_ONE_COLUMN, ThemeActionTypes } from "./types";

export const toggleDarkMode = (): ThemeActionTypes => ({
  type: TOGGLE_DARKMODE,
});

export const toggleOneColumn = (): ThemeActionTypes => ({
  type: TOGGLE_ONE_COLUMN,
});
