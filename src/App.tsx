import React from "react";
import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import MainFeaturedPost from "./components/MainFeatured";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";

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

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        <MainFeaturedPost />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
      {/* <Number />
      <City /> */}
    </div>
  );
}

export default App;
