import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

const theme = createTheme();

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <h1>About Me</h1>
        <img src="" />
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
