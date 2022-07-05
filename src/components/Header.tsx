import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: "#000000",
      borderBottom: "1px solid",
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
      outline: "none",
      color: "#ffffff",
      padding: "1rem",
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={3}>
            <Grid sm={3} className={classes.titleContainer}>
              <Typography variant="h5">
                <Link to="/" className={classes.title}>
                  AOI
                </Link>
              </Typography>
            </Grid>
            <Grid sm={6} className={classes.menuContainer}>
              <Typography variant="button" color="textSecondary">
                <Link to="/works">WORKS</Link>
              </Typography>
              <Typography variant="button" color="textSecondary">
                <Link to="/blog">BLOG</Link>
              </Typography>
              <Typography variant="button" color="textSecondary">
                <Link to="/aboutme">ABOUT ME</Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
