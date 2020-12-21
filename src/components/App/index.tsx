import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "../../theme/ThemeProvider";
import store from "../../store";
import Home from "../../pages/Home";
import "fontsource-roboto";
import Header from "../Header";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
