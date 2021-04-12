import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import GenerateAllPets from "./AdoptionPage/GenerateAllPets";
import Homepage from "./Homepage";

const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/adoption">
            <GenerateAllPets />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
