import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
