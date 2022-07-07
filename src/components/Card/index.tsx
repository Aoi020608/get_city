import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

interface IBlogCardProps {
  title: string;
  body: string;
  date: string;
}

export default function BlogCard({ title, body, date }: IBlogCardProps) {
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    const tempDate = new Date(date);
    setNewDate(tempDate.toLocaleDateString());
  }, [date]);

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        margin: "3rem 4rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: "40rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="medium" >READ</Button>
        <Typography variant="body2">{newDate}</Typography>
      </CardActions>
    </Card>
  );
}
