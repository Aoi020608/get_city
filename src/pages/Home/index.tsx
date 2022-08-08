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
          <Grid>
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
          <Divider />
          <Typography
            variant="h5"
            color="inherit"
            paragraph
            style={{ padding: "1rem" }}
          >
            Hi, I'm Aoi. I'm currently a student, studying computer science. I
            am interested in crypto, blockchain, web3.0. I have joined some
            projects such as watch NFT project, video NFT project. My task was
            mainly developing front-end using React.js and developing smart
            contract.
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
            <Link
              to={"/aboutme"}
              style={{
                paddingLeft: "0.5rem",
                textDecoration: "underline",
                color: "#000000",
              }}
            >
              here.
            </Link>
          </Typography>
        </Grid>
        <SnsApps />
      </Container>
    </ThemeProvider>
  );
};

export default MainFeaturedPost;
