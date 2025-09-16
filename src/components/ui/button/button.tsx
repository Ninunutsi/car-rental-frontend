import React from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";
import { Colors } from "@/styles/colors";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  sx?: any;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  size = "medium",
  sx,
}) => {
  return (
    <MUIButton
      type={type}
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      size={size}
      startIcon={icon}
      sx={{
        textTransform: "none",
        backgroundColor:
          variant === "contained" ? Colors.Accent : "transparent",
        color: variant === "contained" ? "#fff" : Colors.Accent,
        border: variant === "outlined" ? `1px solid ${Colors.Accent}` : "none",
        "&:hover": {
          backgroundColor:
            variant === "contained" ? Colors.AccentHover : "transparent",
          borderColor: Colors.AccentHover,
        },
        "&:disabled": {
          backgroundColor: "#ccc",
          color: "#888",
          cursor: "not-allowed",
        },
        ...sx,
      }}
    >
      {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : label}
    </MUIButton>
  );
};
