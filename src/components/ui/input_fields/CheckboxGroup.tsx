import React from "react";
import { Controller, Control } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Colors } from "@/styles/colors";

interface Service {
  id: number;
  service_name: string;
  price: string;
}

interface CheckboxGroupProps {
  name: string;
  options: Service[];
  control: Control<any>;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormGroup>
          {options.map((option) => {
            // Automatically check services that cost 0 GEL
            const isChecked =
              field.value?.some((item: any) => item.id === option.id) ||
              option.price === "0.00"; // Check price instead of id

            const quantity =
              field.value?.find((item: any) => item.id === option.id)
                ?.quantity || 1;

            return (
              <Box
                key={option.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  border: `1px solid #C4C4C4`,
                  my: 1,
                  borderRadius: "5px",
                  p: "3px 15px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => {
                        let newValue;
                        if (e.target.checked) {
                          newValue = [
                            ...(field.value || []),
                            {
                              id: option.id,
                              quantity: 1,
                              service_name: option.service_name,
                              price: option.price,
                              service_id: option.id,
                            },
                          ];
                        } else {
                          newValue = field.value.filter(
                            (item: any) => item.id !== option.id
                          );
                        }
                        field.onChange(newValue);
                      }}
                      sx={{
                        transform: "scale(0.9)",
                        color: Colors.Accent,
                        "&.Mui-checked": { color: Colors.Accent },
                        padding: "4px",
                      }}
                    />
                  }
                  label={`${option.service_name} (${option.price} USD)`}
                  sx={{
                    gap: "2px",
                    "& .MuiTypography-root": {
                      fontSize: "15px",
                    },
                  }}
                />
                {isChecked && option.price !== "0.00" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginLeft: "32px",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => {
                        if (quantity > 1) {
                          field.onChange(
                            field.value.map((item: any) =>
                              item.id === option.id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                            )
                          );
                        }
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography>{quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => {
                        field.onChange(
                          field.value.map((item: any) =>
                            item.id === option.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                          )
                        );
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </Box>
            );
          })}
        </FormGroup>
      )}
    />
  );
};
