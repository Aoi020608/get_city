import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SnsApps from "../../components/SnsApps";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "3rem",
      alignItems: "center",
      justifyContent: "space-around",
    },
    [theme.breakpoints.up("sm")]: {},
    color: "#000000",
  },
  gridContainer: {
    width: "100%",
  },
  button: {
    padding: "1rem 6rem",
  },
}));

const MainFeaturedPost: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container className={classes.mainFeaturedPostContent}>
          <Grid className={classes.gridContainer}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              align="center"
            >
              Aoi Kurokawa
            </Typography>
          </Grid>
          <Grid className={classes.gridContainer}>
            <Divider />
          </Grid>
          <Typography
            variant="h4"
            color="inherit"
            paragraph
            style={{ padding: "1rem", textAlign: "center" }}
          >
            Hi, I'm Aoi. An adventurous traveler, and dog-lover.
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ padding: "1rem" }}
          >
            I'm currently a student, studying computer science. I also go by
            Full Stack Developer, Front-End Developer, or Back-End Developer.
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ padding: "1rem" }}
          >
            For my personal interest, I like blockchain, web3.0 technologies. I
            have joined some projects such as watch NFT project, video NFT
            project. My task was mainly developing user interface by front-end
            frameworks such as ReactJS, NextJS.
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ padding: "1rem" }}
          >
            You can find some projects that I have joined before and my personal
            projects
            <Link
              to={"/works"}
              style={{
                paddingLeft: "0.5rem",
                textDecoration: "underline",
                color: "#000000",
              }}
            >
              here.
            </Link>
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ padding: "1rem" }}
          >
            You can find my resume
            <a
              href="https://github.com/Aoi1011/resume/blob/main/AOI%20KUROKAWA.pdf"
              target="_blank"
              style={{
                paddingLeft: "0.5rem",
                textDecoration: "underline",
                color: "#000000",
              }}
              rel="noreferrer"
            >
              here.
            </a>
          </Typography>
        </Grid>
        <SnsApps />
      </Container>
    </ThemeProvider>
  );
};

export default MainFeaturedPost;
