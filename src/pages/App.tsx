import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Works from "./Work";
import Aboutme from "./AboutMe";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
      </main>
    </div>
  );
}
