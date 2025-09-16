import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import { Controller } from "react-hook-form";
import { Colors } from "@/styles/colors";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string | any;
  control: any;
  icon?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  size?: any;
  sx?: any;
  width?: string;
  variant?: "standard" | "outlined" | "filled";
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  error,
  control,
  icon,
  multiline = false,
  rows,
  size = "small",
  sx,
  width = "100%",
  variant = "outlined",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box
          sx={{
            position: "relative",
            width: width,
            mb: 1,
          }}
        >
          <TextField
            {...field}
            label={label}
            type={type}
            placeholder={placeholder}
            error={!!error}
            helperText={error}
            variant={variant} // <- use the variant prop here
            FormHelperTextProps={{
              sx: {
                position: "absolute",
                bottom: "-20px",
                left: "-10px",
                color: "error",
                fontSize: "0.70rem",
                whiteSpace: "nowrap",
              },
            }}
            fullWidth
            multiline={multiline}
            size={size}
            rows={multiline ? rows : undefined}
            InputProps={{
              startAdornment: icon ? (
                <InputAdornment position="start">{icon}</InputAdornment>
              ) : null,
            }}
            sx={{
              "& input[type=number]": {
                MozAppearance: "textfield",
                "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              },
              ...(variant === "outlined" && {
                "& .MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: Colors.Accent,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: Colors.Accent,
                  },
                },
              }),
              ...(variant === "standard" && {
                "& .MuiInput-underline:after": {
                  borderBottomColor: Colors.Accent,
                },
              }),
              mb: 1,
              ...sx,
            }}
          />
        </Box>
      )}
    />
  );
};
