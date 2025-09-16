import { Box, Typography } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ErrorIcon sx={{ fontSize: "65px", color: "#B71112", mb: "1rem" }} />
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#131825",
          fontSize: "95px",
        }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ letterSpacing: "2px", color: "#B71112" }}>
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFound;
