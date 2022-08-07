import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@mui/material";

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
    button: {
      fontSize: "3rem",
    },
  })
);

const snses = [
  {
    id: 1,
    name: "Medium",
    link: "https://medium.com/@aoi01",
    icon: <FaMedium />,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aoi-kurokawa-aa1744204/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "GitHub",
    link: "https://github.com/Aoi1011",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "Twitter",
    link: "https://twitter.com/aoi18_en",
    icon: <FaTwitter />,
  },
];

export default function SnsApps() {
  const classes = useStyles();

  const handleClick = (link: string) => {
    window.open(link, "_blank")?.focus();
  };

  return (
    <Grid className={classes.loginContainer}>
      {snses.map((sns) => (
        <div key={sns.id} onClick={() => handleClick(sns.link)}>
          <Button style={{ fontSize: "3rem" }}>{sns.icon}</Button>
        </div>
      ))}
    </Grid>
  );
}
