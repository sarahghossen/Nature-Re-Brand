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
import Header from "./Header";
import PetSpeciesPage from "./PetSpeciesPage";
import AdoptionPage from "./AdoptionPage/AdoptionPage";
import PetSpeciesButton from "./AdoptionPage/PetSpeciesButton";
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
            <AdoptionPage />
            <PetSpeciesButton />
            <GenerateAllPets />
          </Route>
          <Route exact path="/adoption/:species">
            <PetSpeciesPage />
          </Route>
          <Route exact path="/adoption/id/:id">
            <SinglePetPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
