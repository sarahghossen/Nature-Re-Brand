import React, { useEffect, useState } from "react";
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
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
const App = () => {
  const [petSpecies, setPetSpecies] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header setPetSpecies={setPetSpecies} />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/adoption">
            <AdoptionBanner />
            <AdoptionButton
              petSpecies={petSpecies}
              setPetSpecies={setPetSpecies}
            />
            <AllPets />
          </Route>
          <Route exact path="/adoption/:id">
            <AdoptionBanner />
            <SinglePetPage />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
