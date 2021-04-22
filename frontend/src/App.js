import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
  const [userData, setUserData] = useState(null);

  let getId = localStorage.getItem("_id");
  useEffect(() => {
    console.log("BEFORE SIGN IN", getId);
    fetch(`/users/login/${getId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setUserData(data.user);
      });
  }, [getId]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header
          setPetSpecies={setPetSpecies}
          userData={userData}
          setUserData={setUserData}
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
            <SinglePetPage setPetSpecies={setPetSpecies} />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/sign-in">
            {userData ? (
              <Redirect to="/" />
            ) : (
              <SignIn userData={userData} setUserData={setUserData} />
            )}
          </Route>
          <Route exact path="/sign-up">
            {userData ? (
              <Redirect to="/" />
            ) : (
              <SignUp userData={userData} setUserData={setUserData} />
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
