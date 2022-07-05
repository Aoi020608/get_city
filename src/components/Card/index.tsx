import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IBlogCardProps {
  title: string;
  body: string;
}

export default function BlogCard({ title, body }: IBlogCardProps) {
  return (
    <Card
      sx={{ backgroundColor: "#a2a2a2", color: "#000", margin: "3rem 4rem" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">READ</Button>
      </CardActions>
    </Card>
  );
}
