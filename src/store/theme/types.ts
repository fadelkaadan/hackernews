export enum ThemeEnum {
  DARK = "DARK",
  NIGHT = "NIGHT",
  LIGHT = "LIGHT",
}

export interface ThemeState {
  theme: ThemeEnum;
  isOneColumnLayout: boolean;
}

export const SET_THEME = "SET_THEME";
export const TOGGLE_ONE_COLUMN_LAYOUT = "TOGGLE_ONE_COLUMN_LAYOUT";

interface setThemeAction {
  type: typeof SET_THEME;
  data: ThemeEnum;
}

interface toggleOneColumnLayoutAction {
  type: typeof TOGGLE_ONE_COLUMN_LAYOUT;
}

export type ThemeActionTypes = setThemeAction | toggleOneColumnLayoutAction;
