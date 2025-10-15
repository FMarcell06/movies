import { img_300, img_500, noImg } from "../utils";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MyModal } from "./MyModal";

export const MyCard = ({
  id,
  backdrop_path,
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
  type,
}) => {
  const [open, setOpen] = React.useState(false);
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
        onClick={()=>setOpen(true)}
      >
        <span className="vertical-left"></span>
        <span className="vertical-right"></span>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image={poster_path?img_500 + poster_path:noImg}
          alt={title}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="votes">{Math.round(vote_average * 10) / 10}</div>
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
      {open&&<MyModal id={id} type={type} backdrop_path={backdrop_path} release_date={release_date} noImg={noImg} title={title} open={open} setOpen={setOpen} overview={overview}/>}
    </Box>
  );
};
