import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import ThemeProvider from "../theme/ThemeProvider";
import store from "../store";
import "fontsource-roboto";
import Header from "../components/Header";
import Home from "../pages/Home";
import CommentSection from "../pages/CommentSection";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main.background};
`;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path={"/"}>
                <Home />
              </Route>
              <Route path={"/articles/:storyId/comments"}>
                <CommentSection />
              </Route>
            </Switch>
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
