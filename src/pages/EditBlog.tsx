import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { instance } from "../configs/api";

const theme = createTheme();

interface IBlog {
  title: string;
  body: string;
  category: number;
}

interface ICategories {
  id: number;
  name: string;
}

export default function EditBlog() {
  const [blog, setBlog] = useState<IBlog>({ title: "", body: "", category: 0 });
  const [categories, setCategories] = useState<any[]>([{}]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleTitleChange = (e: any) => {
    setBlog({ ...blog, title: e.target.value });
  };

  const handleBodyChange = (e: any) => {
    setBlog({ ...blog, body: e.target.value });
  };

  const handleCategoryChange = (e: any) => {
    setBlog({ ...blog, category: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Body", blog.body);

    const data = {
      title: blog.title,
      body: blog.body,
      category_id: blog.category,
    };
    instance
      .post("/post", data)
      .then((res) => navigate("./"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    instance
      .get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!loading && (
        <ThemeProvider theme={theme}>
          <Container sx={{ py: 8 }} maxWidth="lg">
            <div>
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "white", padding: "1rem" }}
              >
                <TextField
                  id="title"
                  label="Title"
                  fullWidth
                  value={blog.title}
                  onChange={handleTitleChange}
                />
                <FormControl fullWidth>
                  <InputLabel id="select-label">Category</InputLabel>
                  <Select
                    labelId="select-label"
                    id="simple-select"
                    value={blog.category}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    {categories.map((category: any) => (
                      <MenuItem value={category[0]} key={category[0]}>
                        {category[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  id="title"
                  label="Body"
                  multiline
                  rows={20}
                  fullWidth
                  value={blog.body}
                  onChange={handleBodyChange}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
              <br />
              <Button>Cancel</Button>
            </div>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
