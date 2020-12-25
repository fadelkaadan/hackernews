import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import ThemeProvider from "../../theme/ThemeProvider";
import store from "../../store";
import Home from "../../pages/Home";
import "fontsource-roboto";
import Header from "../Header";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main.background};
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Wrapper>
          <Header />
          <Home />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
