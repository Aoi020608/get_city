import React, { useEffect, useState } from "react";
import groupBy from "lodash/groupBy";
import { Dictionary } from "lodash";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import { CardMedia, Grid, Link } from "@mui/material";
// import { CardActionArea } from "@mui/material";
// import Markdown from "markdown-to-jsx";
import { Typography } from "@material-ui/core";

import type { IPost } from "../../lib/content/posts";
import { getAllPosts } from "../../lib/content/posts";
import { formatDate } from "../../lib/formatDate";

interface IProps {
  posts: readonly IPost[];
}

const theme = createTheme();

const PostsPage: React.FC = () => {
  const [grouped, setGrouped] = useState<Dictionary<IPost[]>>();

  const prepare = async () => {
    const posts = await getAllPosts();
    console.log("Posts: ", posts);
    const sortedPosts = posts
      .filter((post) => !post.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    const _grouped = groupBy(sortedPosts, (post) =>
      new Date(post.publishedAt).getFullYear()
    );
    setGrouped(_grouped);
  };

  useEffect(() => {
    prepare();
  }, []);

  return (
    <>
      <h1>Writing</h1>
      <ThemeProvider theme={theme}>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
            <Grid item lg={7} sm={12}>
              <Typography variant="h1" component="div" gutterBottom>
                Writing
              </Typography>
            </Grid>
            {/* <Grid item lg={5} sm={12}> */}
              {/* {Object.entries(grouped!)
                .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
                .map(([year, yearPosts]) => (
                  <div key={year}>
                    <h2>{year}</h2>
                    <ul>
                      {yearPosts.map((post) => (
                        <li key={post.id}>
                          <Link href={post.path}>
                            <a>{post.title}</a>
                          </Link>{" "}
                          - {formatDate(new Date(post.publishedAt))}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))} */}
            {/* </Grid> */}
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

// export const getStaticProps: GetStaticProps<
//   IProps,
//   { postID: string }
// > = async () => {
//   const posts = await getAllPosts();
//   return { props: { posts } };
// };

export default PostsPage;
