import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SnsApps from "../../components/SnsApps";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    margin: "4rem 0 2rem 0",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: "#000000",
    margin: "0 10rem",
  },
  buttonContainer: {
    padding: "5rem",
  },
  button: {
    padding: "1rem 6rem",
  },
  snsContainer: {},
}));

const MainFeaturedPost: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              align="center"
            >
              Aoi Kurokawa
            </Typography>
            <hr></hr>
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
              You can find some projects that I have joined before and my
              personal projects
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
          </div>
        </Grid>
      </Grid>
      <SnsApps />
    </>
  );
};

export default MainFeaturedPost;
