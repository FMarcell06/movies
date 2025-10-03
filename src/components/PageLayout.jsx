import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

export const PageLayout = ({ title, children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{ background: "linear-gradient(to right, #0f172a,#4f46e5)",minHeight:"100vh" }}
    >
      <Typography variant="h3" sx={{textTransform:"uppercase",color:"white",fontWeight:"bold",letterSpacing:2,textAlign:"center",
        background:"linear-gradient(to right, #596d9eff, #9c98dfff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",p:"1rem"
      }}>{title}</Typography>
      <Box>{children}</Box>
    </Container>
  );
};
