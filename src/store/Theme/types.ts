export interface ThemeState {
  darkmode: boolean;
  oneColumn: boolean;
}

export const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";
export const TOGGLE_ONE_COLUMN = "TOGGLE_ONE_COLUMN";

interface toggleDarkModeAction {
  type: typeof TOGGLE_DARKMODE;
}

interface toggleOneColumnAction {
  type: typeof TOGGLE_ONE_COLUMN;
}

export type ThemeActionTypes = toggleDarkModeAction | toggleOneColumnAction;
