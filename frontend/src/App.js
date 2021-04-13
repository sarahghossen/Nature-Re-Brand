import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import AllPets from "./AdoptionPage/AllPets";
import Homepage from "./Homepage";
import Header from "./Header";
import AdoptionBanner from "./AdoptionPage/AdoptionBanner";
import AdoptionButton from "./AdoptionPage/AdoptionButton";
import SinglePetPage from "./AdoptionPage/SinglePetPage";

const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/adoption">
            <AdoptionBanner />
            <AdoptionButton />
            <AllPets />
          </Route>
          <Route exact path="/adoption/:id">
            <SinglePetPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
