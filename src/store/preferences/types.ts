export enum ThemeEnum {
  DARK = "DARK",
  NIGHT = "NIGHT",
  LIGHT = "LIGHT",
}

export interface ThemeState {
  isPreferencesClicked: Boolean
  theme: ThemeEnum;
  isOneColumnLayout: Boolean;
}

export const TOGGLE_PREFERENCES = "TOGGLE_PREFERENCES";
export const SET_THEME = "SET_THEME";
export const TOGGLE_ONE_COLUMN_LAYOUT = "TOGGLE_ONE_COLUMN_LAYOUT";

interface togglePreferences {
  type: typeof TOGGLE_PREFERENCES;
}

interface setThemeAction {
  type: typeof SET_THEME;
  data: ThemeEnum;
}

interface toggleOneColumnLayoutAction {
  type: typeof TOGGLE_ONE_COLUMN_LAYOUT;
}

export type ThemeActionTypes =
  | setThemeAction
  | toggleOneColumnLayoutAction
  | togglePreferences;
