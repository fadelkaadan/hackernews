import { TOGGLE_DARKMODE, TOGGLE_ONE_COLUMN } from "./Actions";

const initialState = {
  darkmode: true,
  oneColumn: true,
};

export default (state = initialState, action: any = {}) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkmode: !state.darkmode,
      };
      case TOGGLE_ONE_COLUMN:
        return {
          ...state,
          oneColumn: !state.oneColumn,
        };
    default:
      return state;
  }
};
