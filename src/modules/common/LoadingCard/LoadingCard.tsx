import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mx: { xs: "10px", sm: "unset" },
        width: { xs: "100%", sm: "23%" },
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={110} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={80} />
      <Skeleton variant="rounded" width={"100%"} height={150} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Box>
  );
};

export default LoadingCard;
