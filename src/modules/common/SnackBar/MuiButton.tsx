"use client";
import { Colors } from "@/styles/colors";
import React from "react";
import MuiButton from "@mui/material/Button";

export const MUIButton = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <MuiButton
      sx={{
        color: Colors.Accent,
        textTransform: "none",
        border: `2px solid ${Colors.Accent}`,
        padding: "5px 10px",
        fontWeight: "bold",
      }}
      size="small"
      onClick={handleClose}
    >
      Yes, I agree.
    </MuiButton>
  );
};
