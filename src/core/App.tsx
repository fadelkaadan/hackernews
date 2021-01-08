import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import ThemeProvider from "../theme/ThemeProvider";
import store from "../store";
import "fontsource-roboto";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import User from "../pages/User";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main.background};
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content 1fr min-content;
`;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Wrapper>
            <Header />
            <Switch>
            <Route exact path={"/users/:id"}>
                <User />
              </Route>
              <Route exact path={"/"}>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
