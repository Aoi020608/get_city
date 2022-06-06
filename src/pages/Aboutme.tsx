import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Markdown from "markdown-to-jsx";

import me from "../assets/img/me.png";

const theme = createTheme();

const md = `
# About Me

### Aoi Kurokawa

*Born in 1996. I am currently on my senior year at the University of FPT studying Computer Science. I like to develop something so I have joined some projects as an intern.*

- [ST United](https://stunited.vn/)

> I had learned web development for 3 months, especially front-end. I learned HTML, CSS, React.js and Redux. 
> I joined the project that build the employee management system.

- [FPT Software](https://www.fpt-software.com/)

> I learned low-code development such as [Outsystems](https://www.outsystems.com/), [Mendix](https://www.mendix.com/).
> I joined several projects from Australia and Japan, then processed it with client. 

 *In addition, I am fan of Blockchain technology. I have experience to develope some DApps with Solidity Node.js and React.js. If you are intersted, please go to [my gallery](/works). I think Blockchain techonology has brought many solutions for the problem that we have not been able to solove it. One of these problem is financial. We have been reviewing every existing financial system again by emerging Bitcoin and we have found some problems. I believe that technology has been changing the social system better and blockchain techonology will be one of them. We know that blockchain has still many problems so I would like to help for that.*  

`;

function Aboutme() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
          <Grid item lg={7} sm={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="600rem"
                  image={me}
                  alt="green iguana"
                  // sx={{ padding: "1rem 1rem" }}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={5} sm={12}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Markdown>{md}</Markdown>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Aboutme;
