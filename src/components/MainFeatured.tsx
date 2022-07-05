import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { BsHash } from "react-icons/bs";

import image1 from "../assets/img/mountain.jpg";
import SnsApps from "./SnsApps";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?cs=srgb&dl=pexels-denis-linine-714258.jpg&fm=jpg)`,
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
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: "#7fff65",
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
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          backgroundImage: `${image1}`,
        }}
      >
        {<img style={{ display: "none" }} src={image1} alt="description" />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                AOI KUROKAWA
              </Typography>
              <hr></hr>
              <Typography
                variant="h5"
                color="inherit"
                paragraph
                style={{ padding: "1rem" }}
              >
                Hi, I'm Aoi. I'm currently a student, studying computer science.
                I am interested in crypto, blockchain, web3.0. I have joined
                some projects such as watch NFT project, video NFT project. My
                task was mainly developing front-end using React.js and
                developing smart contracts. You can find some projects that I
                have joined before and my personal projects
                <Link
                  to={"/works"}
                  style={{
                    paddingLeft: "0.5rem",
                    textDecoration: "underline",
                    color: "#7fff65",
                  }}
                >
                  here.
                </Link>
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                <BsHash /> Software Engineer
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                <BsHash /> Blockchain
              </Typography>

              <Typography variant="h5" color="inherit" paragraph>
                <BsHash /> Crypto
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper>
        <SnsApps />
      </Paper>
    </>
  );
};

export default MainFeaturedPost;
