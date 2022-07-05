import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      fontSize: "3rem",
      width: "100%",
      backgroundColor: "#000",
      padding: "0 20rem",
    },
  })
);

export default function SnsApps() {
  const classes = useStyles();
  return (
    <Grid className={classes.loginContainer}>
      <a
        href="https://medium.com/@aoi01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium />
      </a>
      <a
        href="https://www.linkedin.com/in/aoi-kurokawa-aa1744204/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Aoi1011"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/aoi18_en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </Grid>
  );
}
