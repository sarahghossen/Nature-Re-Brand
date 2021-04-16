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
import SignIn from "./userAuth/SignIn";
import SignUp from "./userAuth/SignUp";
const App = () => {
  const [petSpecies, setPetSpecies] = useState(null);
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header
          setPetSpecies={setPetSpecies}
          userData={userData}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
        />
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
          <Route exact path="/sign-in">
            <SignIn
              userData={userData}
              setUserData={setUserData}
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
            />
          </Route>
          <Route exact path="/sign-up">
            <SignUp
              userData={userData}
              setUserData={setUserData}
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
