import { Box, Typography } from "@mui/material";
import React from "react";

interface header {
  question: string;
  heading: string;
  text?: string;
  headingColor?: string;
}

const SectionsHeader: React.FC<header> = ({
  question,
  heading,
  text,
  headingColor = "#1A202C",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#D6E4FD",
          padding: "5px 17px",
          color: "#3563E9",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: { xs: "22px", sm: "25px" },
          }}
        >
          {question}
        </Typography>
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: headingColor,
          fontWeight: "bold",
          fontSize: { xs: "24px", sm: "32px" },
        }}
      >
        {heading}
      </Typography>
      {text && (
        <Typography
          variant="body1"
          sx={{
            color: "#3d4d56",
            lineHeight: { xs: "20px", sm: "23px" },
            width: { xs: "80%", sm: "50%" },
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default SectionsHeader;
