import React from "react";
import { Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Colors } from "@/styles/colors";

interface DatePickerProps {
  name: string;
  label?: string;
  error?: string;
  control: any;
  size?: "small" | "medium";
  sx?: any;
  width?: string;
}

export const DateInput: React.FC<DatePickerProps> = ({
  name,
  label,
  error,
  control,
  size = "small",
  sx,
  width = "100%",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Box sx={{ position: "relative", width: width, mb: 1 }}>
            <DatePicker
              {...field}
              value={field.value ? dayjs(field.value) : null} // Ensure dayjs compatibility
              onChange={(date) => field.onChange(date?.toDate() || null)} // Convert to JS Date
              slotProps={{
                textField: {
                  label,
                  error: !!error,
                  helperText: error,
                  FormHelperTextProps: {
                    sx: {
                      position: "absolute",
                      bottom: "-20px",
                      left: "-10px",
                      color: "error",
                      fontSize: "0.70rem",
                      whiteSpace: "nowrap",
                    },
                  },
                  fullWidth: true,
                  size,
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: Colors.Accent,
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: Colors.Accent,
                      },
                    },
                    ...sx,
                  },
                },
              }}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};
