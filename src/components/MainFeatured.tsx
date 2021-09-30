import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";
import { BsHash } from "react-icons/bs";

import image1 from "../assets/img/mountain.jpg";

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
    height: "37rem",
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
  },
  buttonContainer: {
    padding: "5rem",
  },
  button: {
    padding: "1rem 6rem",
  },
}));

const MainFeaturedPost: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleExplore = () => {
    history.push("/works");
  };

  return (
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
            <Typography variant="h5" color="inherit" paragraph>
              <BsHash /> Software Engineer
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              <BsHash /> Blockchain Researcher
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                style={{ padding: "1rem 6rem" }}
                onClick={handleExplore}
              >
                Explore
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;
