import { Box, Typography } from "@mui/material";
import React from "react";
import SortBy from "../SortBy";
import { Colors } from "@/styles/colors";

const CarListHeader = ({ count }: { count: string }) => {
  return (
    <Box
      display={"flex"}
      alignItems={{ xs: "flex-start", sm: "center" }}
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      mx={{ xs: "10px", sm: "unset", md: 1 }}
    >
      <Box>
        <Typography color={"#90A3BF"} fontWeight={"bold"} fontSize={"14px"}>
          Recommended Cars
        </Typography>
      </Box>

      <Box
        display={"flex"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent={{ xs: "space-between", sm: "unset " }}
        gap={5}
      >
        <SortBy />
        <Typography
          color={"#90A3BF"}
          my={"1rem"}
          fontWeight={"bold"}
          fontSize={"14px"}
        >
          {count} Cars
        </Typography>
      </Box>
    </Box>
  );
};

export default CarListHeader;
