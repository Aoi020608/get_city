import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import blogData from "../blogData.json";

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <div style={{ color: "white" }}>
          <p>{blogData[1].body}</p>
        </div>
      </Container>
    </ThemeProvider>
  );
}
