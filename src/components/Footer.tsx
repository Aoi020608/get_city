import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "48px 0px",
    backgroundColor: "#424242",
    maxWidth: "100%",
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
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6 }}
      style={{ backgroundColor: "lavender", position: "fixed", bottom: 0, width: "100%" }}
      className={classes.footerContainer}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {description}
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
