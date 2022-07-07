import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeatured";
import Footer from "../components/Footer";
import Works from "./Work";
import Aboutme from "./AboutMe";
import Blog from "./BlogList";
import EditBlog from "./EditBlog";
import BlogDetail from "./BlogDetail";

export default function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main
        style={{
          padding: "1rem",
          backgroundColor: "#000000",
          height: "100vh",
          overflow: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainFeaturedPost />} />
          <Route path="/works" element={<Works />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/blog/edit" element={<EditBlog />} />
        </Routes>
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
