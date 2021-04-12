import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import GenerateAllPets from "./AdoptionPage/GenerateAllPets";

const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/adoption">
            <GenerateAllPets />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
