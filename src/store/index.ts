import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

declare global {
  interface Window {
    _REDUX_DEVTOOLS_EXTENSION_COMPSE_?: typeof compose;
  }
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPSE_ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
