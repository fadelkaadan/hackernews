export interface ThemeState {
  isDarkmode: boolean;
  isOneColumnLayout: boolean;
}

export const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";
export const TOGGLE_ONE_COLUMN_LAYOUT = "TOGGLE_ONE_COLUMN_LAYOUT";

interface toggleDarkModeAction {
  type: typeof TOGGLE_DARKMODE;
}

interface toggleOneColumnLayoutAction {
  type: typeof TOGGLE_ONE_COLUMN_LAYOUT;
}

export type ThemeActionTypes =
  | toggleDarkModeAction
  | toggleOneColumnLayoutAction;
