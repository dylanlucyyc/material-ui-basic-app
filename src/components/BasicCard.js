import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function BasicCard({ post, isLogin }) {
  return (
    <Card
      sx={{ minWidth: 275, backgroundColor: "#353535", color: "#fff" }}
      key={post.id}
    >
      <CardContent>
        <Typography variant="h2" sx={{ fontSize: 20, mb: 1 }}>
          {post.title}
        </Typography>
        <Divider sx={{ mb: 2, borderColor: "#888" }} />
        <Box sx={{ padding: 0 }}>
          {post.skills.map((skill) => (
            <Chip
              label={skill}
              sx={{ backgroundColor: "#d84943", color: "white", mr: 1, mb: 1 }}
            />
          ))}
        </Box>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Link to={isLogin ? `/jobs/${post.id}` : `/login`}>
          {" "}
          <Button
            size="small"
            sx={{ backgroundColor: "#ffa727", color: "black", mr: 1, mb: 1 }}
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
