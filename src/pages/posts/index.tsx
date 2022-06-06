import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Markdown from "markdown-to-jsx";
import { Typography } from "@material-ui/core";

// import {getAllPosts} from "~src/"

// import me from "../assets/img/me.png";

const theme = createTheme();

const PostsPage: React.FC = () => {
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
              {/* <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="600rem"
                    // image={me}
                    alt="green iguana"
                    // sx={{ padding: "1rem 1rem" }}
                  />
                </CardActionArea>
              </Card> */}
            </Grid>
            <Grid item lg={5} sm={12}>
              <Card>
                <CardActionArea>
                  <CardContent>{/* <Markdown>{md}</Markdown> */}</CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default PostsPage;
