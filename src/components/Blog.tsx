import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

interface MainProps {
  posts: ReadonlyArray<string>;
  postContent: string,
  title: string;
}

function Blog(props: MainProps) {
  const { title, posts } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
      style={{marginTop: "4rem"}}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      
      <Markdown className="markdown" >
        {props.postContent}
      </Markdown>
    
    </Grid>
  );
}

export default Blog;
