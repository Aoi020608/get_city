import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: "white",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    title: {
      //   flexGrow: 1,
      outline: "none",
      color: "black",
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/signin");
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={3}>
            <Grid sm={3} className={classes.titleContainer}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5">
                <Link to="/" className={classes.title}>
                  AOI KUROKAWA
                </Link>
              </Typography>
            </Grid>
            <Grid sm={6} className={classes.menuContainer}>
              <Typography variant="button" color="textSecondary">
                <Link to="/works">WORKS</Link>
              </Typography>
              {/* <Typography variant="button" color="textSecondary">
                <Link to="/price">PRICE</Link>
              </Typography> */}
              <Typography variant="button" color="textSecondary">
                <Link to="/aboutus">ABOUT ME</Link>
              </Typography>
              <Typography variant="button" color="textSecondary">
                <Link to="/aboutus">CONTACT</Link>
              </Typography>
            </Grid>
            <Grid sm={3} className={classes.loginContainer}>
              <a href="https://medium.com/@aoi01">
                <FaMedium />
              </a>
              <a href="https://www.linkedin.com/in/aoi-kurokawa-aa1744204/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Aoi1011">
                <FaGithub />
              </a>
              <a href="https://twitter.com/Aoi49376675">
                <FaTwitter />
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
