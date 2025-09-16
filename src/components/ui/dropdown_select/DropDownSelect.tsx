import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Colors } from "@/styles/colors";

interface DropdownSelectProps {
  name: string;
  label: string;
  control: any;
  options: { label: string; value: string | number }[];
  error?: string | any;
  sx?: object;
  onChange?: any; // Added onChange prop
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  name,
  label,
  control,
  options,
  error,
  sx,
  onChange, // Accept onChange as a prop
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          fullWidth
          size="small"
          sx={{ mb: 1, ...sx }}
          error={!!error}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            label={label}
            value={field.value ?? ""}
            onChange={(event) => {
              field.onChange(event.target.value);
              if (onChange) onChange(event.target.value); // Call custom onChange if provided
            }}
            sx={{
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: Colors.Accent,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: Colors.Accent,
              },
              ...sx,
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && (
            <FormHelperText
              sx={{
                position: "absolute",
                bottom: "-20px",
                left: "-10px",
                color: "error",
                fontSize: "0.70rem",
                whiteSpace: "nowrap",
              }}
            >
              {error}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
