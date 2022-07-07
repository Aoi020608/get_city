import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import blogData from "./blogData.json";
import { instance } from "../../configs/api";
import BlogCard from "../../components/Card";
import { Grid, Skeleton } from "@mui/material";
import Menu from "../../components/Menu";

const theme = createTheme();

export default function Blog() {
  const [blogs, setBlogs] = useState<Array<any> | null>([{}]);
  const [loading, setLoading] = useState(true);

  const fetchAllPostData = () => {
    instance
      .get("/posts")
      .then((res) => {
        console.log(res);

        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setBlogs(blogData);
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && blogs!.length > 0 ? (
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Container sx={{ py: 8 }} maxWidth="lg">
                <div style={{ color: "white" }}>
                  {blogs!.map((blog) => (
                    <BlogCard
                      title={blog[0][2]}
                      body={blog[0][3]}
                      date={blog[0][5]}
                      key={blog[0]}
                    />
                  ))}
                </div>
              </Container>
            </Grid>
            <Grid item xs={4}>
              <Container
                sx={{ py: 8, position: "sticky", top: "0" }}
                maxWidth="lg"
              >
                <Menu />
              </Container>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : (
        <Skeleton animation="wave" />
      )}
    </>
  );
}
