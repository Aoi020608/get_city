import React from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeatured";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import post1 from "./blog-post1.md";
import post2 from "./blog-post2.md";
import post3 from "./blog-post3.md";
import ComponentName from "./components/Markdown2";
import Works from "./pages/Works";
import Price from "./pages/Price";
import Aboutme from "./pages/Aboutme";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForGotPassword from "./pages/ForgotPassword";

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2, post3];

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <MainFeaturedPost />
            {/* <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid> */}
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/aboutus" exact>
            <Aboutme />
          </Route>
          <Route path="/contact" exact>
            <ComponentName />
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
