import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Typography,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const theme = createTheme();

function Contact() {
  const [accept, setAccept] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="sm">
        <Typography variant="h4">Contact</Typography>
        <FormGroup>
          <Box
            component="form"
            sx={{
              border: "1px solid black",
              borderRadius: "1rem",
              padding: "1rem 1rem 0 1rem",
              margin: "2rem 0",
            }}
            noValidate
            autoComplete="off"
          >
            <Grid lg={12} sm={12} sx={{ padding: "0.5rem" }}>
              <TextField
                required
                id="outlined-required"
                label="Subject"
                fullWidth
              />
            </Grid>
            <Grid lg={12} sm={12} sx={{ padding: "0.5rem" }}>
              <TextField
                required
                id="outlined-required"
                label="Name"
                fullWidth
              />
            </Grid>
            <Grid lg={12} sm={12} sx={{ padding: "0.5rem" }}>
              <TextField
                required
                id="outlined-required"
                label="Mail"
                fullWidth
              />
            </Grid>
            <Grid lg={12} sm={12} sx={{ padding: "0.5rem" }}>
              <TextField
                id="outlined-multiline-static"
                placeholder="Please enter your message here"
                label="Content"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid
              lg={12}
              sm={12}
              sx={{
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <FormControlLabel
                control={<Checkbox onChange={(e) => setAccept(e.target.checked)} />}
                label="I accept the privacy policy."
              />
              <Button variant="outlined" disabled={!accept} sx={{padding: "0.5rem 3rem"}}>Send</Button>
            </Grid>
          </Box>
        </FormGroup>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
