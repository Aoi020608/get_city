import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      fontSize: "3rem",
      width: "100%",
      padding: "0 20rem",
    },
  })
);

const snses = [
  {
    id: 1,
    link: "https://medium.com/@aoi01",
    icon: <FaMedium />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/aoi-kurokawa-aa1744204/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://github.com/Aoi1011",
    icon: <FaGithub />,
  },
  {
    id: 4,
    link: "https://twitter.com/aoi18_en",
    icon: <FaTwitter />,
  },
];

export default function SnsApps() {
  const classes = useStyles();
  return (
    <Grid className={classes.loginContainer}>
      {snses.map((sns) => (
        <a
          href={sns.link}
          target="_blank"
          rel="noopener noreferrer"
          key={sns.id}
        >
          {sns.icon}
        </a>
      ))}
    </Grid>
  );
}
