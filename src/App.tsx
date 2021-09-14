import React from "react";

import Nav from "./components/Nav";
import Number from "./components/Number";
import City from "./components/City";
import MainFeaturedPost from "./components/MainFeatured";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="lg">
      <Nav />
      <main>
        <MainFeaturedPost />
      </main>

      <Number />
      <City />
    </Container>
  );
}

export default App;
