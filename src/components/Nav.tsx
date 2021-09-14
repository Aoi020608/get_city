import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Link } from "@material-ui/core";

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
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  })
);

const Nav: React.FC = () => {
  const classes = useStyles();

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
              <Typography variant="h5" className={classes.title}>
                FinTech
              </Typography>
            </Grid>
            <Grid sm={6} className={classes.menuContainer}>
              <Typography variant="button" color="textSecondary">
                <Link component="button" variant="body2">
                  PRODUCTS
                </Link>
              </Typography>
              <Typography variant="button" color="textSecondary">
                <Link component="button" variant="body2">
                  PRICE
                </Link>
              </Typography>
              <Typography variant="button" color="textSecondary">
                <Link component="button" variant="body2">
                  COMPANY
                </Link>
              </Typography>
            </Grid>
            <Grid sm={3} className={classes.loginContainer}>
              <Button color="primary" variant="outlined">
                GET STARTED
              </Button>
              <Button color="primary" variant="outlined">
                SIGNIN
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
