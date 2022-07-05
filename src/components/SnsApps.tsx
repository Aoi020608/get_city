import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
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

export default function SnsApps() {
  const classes = useStyles();
  return (
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
      <a href="https://twitter.com/aoi18_en">
        <FaTwitter />
      </a>
    </Grid>
  );
}
