import React from "react";

import Nav from "./components/Nav";
import Number from "./components/Number";
import City from "./components/City";
import MainFeaturedPost from "./components/MainFeatured";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainFeaturedPost />
      <Number />
      <City />
    </div>
  );
}

export default App;
