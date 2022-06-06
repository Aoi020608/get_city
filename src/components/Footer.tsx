import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "48px 0px",
    backgroundColor: "#424242",
    maxWidth: "100%",
  },
  acontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: "1rem",
    padding: "0.3rem",
  },
  alink: {
    padding: "1rem",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        AOI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

const Footer = (props: FooterProps) => {
  const classes = useStyles();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6 }}
      style={{
        backgroundColor: "lavender",
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        padding: "0.5rem",
      }}
      className={classes.footerContainer}
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
