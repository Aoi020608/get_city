import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeatured";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Works from "./pages/Works";
import Aboutme from "./pages/Aboutme";

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
