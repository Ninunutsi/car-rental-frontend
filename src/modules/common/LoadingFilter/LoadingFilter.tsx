import { Box, Skeleton } from "@mui/material";
import React from "react";

const LoadingFilter = ({ width }: { width: string | number }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 1,
      }}
    >
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        width={width}
        height={55}
      />
    </Box>
  );
};

export default LoadingFilter;
