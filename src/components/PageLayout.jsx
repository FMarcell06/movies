import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { ContentPagination } from "./ContentPagination";
import { Genres } from "./Genres";

export const PageLayout = ({ title, children,page,setPage,type,selectedGenres,setSelectedGenres,data}) => {
  return (
    <Container
      maxWidth={false}
      sx={{ background: "whitesmoke",minHeight:"100vh" }}
    >
      <Typography variant="h3" sx={{textTransform:"uppercase",color:"white",fontWeight:"bold",letterSpacing:2,textAlign:"center",
        background:"linear-gradient(to right, #93a3cdff, #21c37aff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",p:"1rem"
      }}>{title}</Typography>
      {title!="SearchPage"&&<Genres type={type} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>}
      <Box>{children}</Box>
      <Box display="flex" justifyContent="center" sx={{paddingBottom:"70px", paddingTop:"20px" }}>
        {data&&<ContentPagination page={page} setPage={setPage}/>}
      </Box>
    </Container>
  );
};
