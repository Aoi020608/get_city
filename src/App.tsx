import React from "react";
import { Container, Grid } from "@material-ui/core";

import Nav from "./components/Nav";
import Number from "./components/Number";
import City from "./components/City";
import MainFeaturedPost from "./components/MainFeatured";
import FeaturedPost from "./components/FeaturedPost";

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

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <MainFeaturedPost />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>

      <Number />
      <City />
    </div>
  );
};

export default App;
