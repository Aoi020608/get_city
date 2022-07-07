import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootType } from "../../reducers";

const theme = createTheme();

export default function BlogDetail() {
  const navigate = useNavigate();

  // @ts-ignore
  const { title, body, date } = useSelector((state: RootType) => state.blog);

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
            {title}
          </Typography>
          <Divider sx={{ borderColor: "white" }} />
          <Typography variant="h5" sx={{ color: "white", marginTop: "1rem" }}>
            {date}
          </Typography>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => navigate("/blog")}>See all posts</Button>
          </div>
        </div>

        <Typography
          sx={{ color: "#ccc4c4", whiteSpace: "pre-wrap", fontSize: "30px" }}
        >
          {body}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
