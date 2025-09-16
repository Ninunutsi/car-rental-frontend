import React from "react";
import { Checkbox, FormControlLabel, FormHelperText, Box } from "@mui/material";
import { Controller } from "react-hook-form";
import { Colors } from "@/styles/colors";

interface CheckboxProps {
  name: string;
  label?: string;
  error?: string | any;
  control: any;
  size?: "small" | "medium";
  sx?: any;
}

export const CheckboxInput: React.FC<CheckboxProps> = ({
  name,
  label,
  error,
  control,
  size = "small",
  sx,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                sx={{
                  transform: "scale(0.9)", // Shrinks the checkbox
                  color: Colors.Accent,
                  "&.Mui-checked": { color: Colors.Accent },
                  padding: "4px", // Reduces padding
                  ...sx,
                }}
                size={size}
              />
            }
            label={label}
            sx={{
              gap: "2px", // Reduces space between checkbox and label
              "& .MuiTypography-root": {
                fontSize: "15px",
              }, // Smaller label
            }}
          />
          {error && (
            <FormHelperText
              sx={{
                position: "absolute",
                bottom: "-10px",
                left: "10px",
                color: Colors.Error,
                fontSize: "0.70rem",
                whiteSpace: "nowrap",
                lineHeight: "1rem",
              }}
            >
              {error}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};
