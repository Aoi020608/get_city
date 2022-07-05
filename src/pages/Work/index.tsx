import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaGithub } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { Link } from "@mui/material";

import data from "../worksData.json";

const theme = createTheme();

export default function Works() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {data.map((d) => (
            <Grid item key={d.id} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{}}
                  image={d.image}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {d.title}
                  </Typography>
                  <Typography>{d.description}</Typography>
                </CardContent>
                <CardActions>
                  {d.githubLink && (
                    <Link href={d.githubLink}>
                      <Button size="large">
                        <FaGithub />
                      </Button>
                    </Link>
                  )}
                  {d.detailLink && (
                    <Link href={d.detailLink}>
                      <Button
                        size="large"
                      >
                        <BiDetail />
                      </Button>
                    </Link>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
