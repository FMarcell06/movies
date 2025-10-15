import Modal from "@mui/material/Modal";
import React from "react";
import { useQuery } from "react-query";
import { getDetailsData, img_500 } from "../utils";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MyCarousel } from "./MyCarousel";
import { ShowTrailer } from "./ShowTrailer";

export const MyModal = ({
  open,
  setOpen,
  id,
  type,
  backdrop_path,
  noImg,
  title,
  overview,
  release_date
}) => {
  const urlDetails = `https.//api.themoviedb.org/3/${type}/${id}?api_key=${
    import.meta.env.VITE_TMDB_API_KEY
  }`;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["details", urlDetails],
    queryFn: getDetailsData,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 600,
            bgcolor: "whitesmoke",
            borderRadius: "5px",
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              minHeight:"200px",
         backgroundImage: `linear-gradient(
          rgba(0, 80, 160, 0.65),
          rgba(0, 30, 90, 0.75)
        ), url(${backdrop_path ? img_500 + backdrop_path : noImg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.25)",
      textShadow: "0 1px 4px rgba(0,0,0,0.4)",
      padding:"5px",

            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              fontWeight="bold"
            >
              {title} <span > {`(${release_date})`}</span>
            </Typography>
            <Typography id="modal-modal-description" color="#d1d5db" sx={{ mt: 2 }}>
              {overview}
            </Typography>
          </Box>
          <Box sx={{ padding: "10px", margin: "10px", maxWidth:"100%"}}>
            {<MyCarousel id={id} type={type} />}
          </Box>
          <ShowTrailer id={id} type={type} />
        </Box>
      </Modal>
    </Box>
  );
};
