import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import { FaMedium, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
    padding: "1rem",
  },
  alink: {
    padding: "1rem",
  }
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
      style={{
        backgroundColor: "lavender",
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        padding: "1rem"
      }}
      className={classes.footerContainer}
    >
      {/* <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography> */}
      {/* <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {description}
      </Typography> */}
      <Copyright />
      <Container className={classes.acontainer}>
        <a href="https://medium.com/@aoi01" className={classes.alink}>
          <FaMedium />
        </a>
        <a href="https://www.linkedin.com/in/aoi-kurokawa-aa1744204/" className={classes.alink}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aoi1011" className={classes.alink}>
          <FaGithub />
        </a>
        <a href="https://twitter.com/Aoi49376675" className={classes.alink}>
          <FaTwitter />
        </a>
      </Container>
    </Box>
  );
};

export default Footer;
