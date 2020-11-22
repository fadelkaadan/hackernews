import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./Home";

const theme = {
  main: {
    background: "#2b2b2b",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
