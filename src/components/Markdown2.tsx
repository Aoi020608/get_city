import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material/";
import Divider from "@mui/material/Divider";
import showdown from "showdown";
import parse from "html-react-parser";
import readme from "../blog-post1.md";

export default function ComponentName() {
  const [html, setHTML] = useState("");

  //Use componentDidMount(): if class based component to load md file
  useEffect(() => {
    fetch(readme)
      .then((data) => data.text())
      .then((text) => {
        const converter = new showdown.Converter();
        setHTML(converter.makeHtml(text));
      });
  }, []);

  return (
    <Grid
      item
      style={{ marginTop: "4rem"}}
    >
      <Typography variant="h6" gutterBottom>
        Title
      </Typography>
      <Divider />
      <div>{parse(html)}</div>
    </Grid>
  );
}
