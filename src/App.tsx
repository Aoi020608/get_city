import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeatured";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Works from "./pages/Works";
import Price from "./pages/Price";
import Aboutme from "./pages/Aboutme";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForGotPassword from "./pages/ForgotPassword";

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <MainFeaturedPost />
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/aboutme" exact>
            <Aboutme />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/price" exact>
            <Price />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/forgot-password" exact>
            <ForGotPassword />
          </Route>
        </Switch>
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}

export default App;
