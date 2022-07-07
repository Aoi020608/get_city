import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function BlogDetail() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <div
          style={{
            position: "sticky",
            top: "47px",
            zIndex: "99",
            backgroundColor: "#000",
            padding: "2rem 0",
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Uniswap V2
          </Typography>
          <Divider sx={{ borderColor: "white" }} />
          <Typography variant="h5" sx={{ color: "white", marginTop: "1rem" }}>
            7/6/2022
          </Typography>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => navigate("/blog")}>See all posts</Button>
          </div>
        </div>

        <Typography
          sx={{ color: "white", whiteSpace: "pre-wrap", fontSize: "30px" }}
        >
          Special thanks to Liam Horne for feedback and review. I received no
          money from and have never even met any of the companies making the
          stuff I'm shilling here (with the sole exception of Unisocks); this is
          all just an honest listing of what works for me today.""\n" I have
          lived as a nomad for the last nine years, taking 360 flights
          travelling over 1.5 million kilometers (assuming flight paths are
          straight, ignoring layovers) during that time. During this time, I've
          considerably optimized the luggage I carry along with me: from a
          60-liter shoulder bag with a separate laptop bag, to a 60-liter
          shoulder bag that can contain the laptop bag, and now to a 40-liter
          packpage that can contain the laptop bag along with all the supplies I
          need to live my life. The purpose of this post will be to go through
          the contents, as well as some of the tips that I've learned for how
          you too can optimize your travel life and never have to wait at a
          luggage counter again. There is no obligation to follow this guide in
          its entirety; if you have important needs that differ from mine, you
          can still get a lot of the benefits by going a hybrid route, and I
          will talk about these options too.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
