import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeatured";
import Footer from "./components/Footer";
import Works from "./pages/Work";
import Aboutme from "./pages/AboutMe";
import Blog from "./pages/Blog";
import EditBlog from "./pages/EditBlog";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main
        style={{ padding: "1rem", backgroundColor: "#000000", height: "100vh" }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <MainFeaturedPost />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/edit">
            <EditBlog />
          </Route>
        </Routes>
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
