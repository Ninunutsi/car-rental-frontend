import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface BookingWrapperProps {
  children: ReactNode;
  header: string;
  text: string;
  step: number;
}

const BookingWrapper: React.FC<BookingWrapperProps> = ({
  children,
  header,
  text,
  step,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: { xs: "15px", sm: "25px" },
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        mb: "30px",
      }}
    >
      <Box mb={3}>
        <Typography variant="h6" fontWeight={"bold"} color={"#1A202C"}>
          {header}
        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="body1"
            color={"#90A3BF"}
            fontSize={"14px"}
            width={{ xs: "230px", sm: "unset" }}
          >
            {text}
          </Typography>
          <Typography variant="body1" color={"#90A3BF"} fontSize={"14px"}>
            Step {step} of 5
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={1}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BookingWrapper;
