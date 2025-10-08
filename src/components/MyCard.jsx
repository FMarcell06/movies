import { img_300, img_500 } from "../utils";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

export const MyCard = ({
  backdrop_path,
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
}) => {

  return (
    <Box sx={{ perspective: "3000px" }}>
      <Card
        className="mCard"
        sx={{
          width: 200,
          height: 430,
          boxShadow: 3,
          cursor: "pointer",
        }}
      >
        <span className="vertical-left"></span>
        <span className="vertical-right"></span>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={img_500 + poster_path}
          alt={title}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="votes">{Math.round(vote_average*10)/10}</div>
        <CardContent sx={{}}>
          <Typography
            gutterBottom
            variant=""
            sx={{ fontWeight: "bold" }}
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {release_date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
