import React from "react";
import { Autocomplete, TextField, InputAdornment, Box } from "@mui/material";
import { Controller } from "react-hook-form";
import { Colors } from "@/styles/colors";

interface AutoCompleteProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string | any;
  control: any;
  options: { name: string; value: string | number; code: string }[];
  icon?: React.ReactNode;
  size?: "small" | "medium";
  sx?: any;
  width?: string;
  defaultValue?: string | number; // Accept default value
}

export const AutoCompleteInput: React.FC<AutoCompleteProps> = ({
  name,
  label,
  error,
  control,
  options,
  icon,
  size = "small",
  sx,
  width = "100%",
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Box
          sx={{
            position: "relative",
            width: width,
            mb: 1,
          }}
        >
          <Autocomplete
            {...field}
            options={options}
            getOptionLabel={(option) => option?.name || ""}
            onChange={(_, value) => {
              return field.onChange(value ? value.code : "");
            }}
            value={
              options.find((option) => {
                if (option.code === field.value) {
                  return option.code;
                }
              }) || null
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                placeholder={"Country"}
                error={!!error}
                helperText={error}
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
                size={size}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: icon ? (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ) : null,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: Colors.Accent,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: Colors.Accent,
                    },
                  },
                  ...sx,
                }}
              />
            )}
          />
        </Box>
      )}
    />
  );
};
