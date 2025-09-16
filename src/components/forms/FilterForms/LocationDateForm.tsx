"use client";
import { DropdownSelect } from "@/components/ui/dropdown_select/DropDownSelect";
import { Box, Typography } from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useFilterMenu } from "@/store/useFilterMenu";
import LoadingFilter from "@/modules/common/LoadingFilter";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Colors } from "@/styles/colors";
import { useForm } from "react-hook-form";

const inputStyles = {
  size: "small" as const,
  sx: {
    "& .MuiOutlinedInput-root": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: Colors.Accent,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: Colors.Accent,
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: "17px",
    },
  },
};

export const LocationDateForm = () => {
  const { loading, setFilterQuery } = useFilterMenu();
  const minDate = dayjs().startOf("day");

  // Use state for times
  const [pickUpDate, setPickUpDate] = React.useState(dayjs());
  const [pickUpTime, setPickUpTime] = React.useState(dayjs());
  const [dropOffDate, setDropOffDate] = React.useState(dayjs().add(1, "day"));
  const [dropOffTime, setDropOffTime] = React.useState(dayjs());

  const defaultParams = {
    pickUpLocation: "kutaisi",
    dropOffLocation: "kutaisi",
    pickUpDate: dayjs(),
    pickUpTime: dayjs(),
    dropOffDate: dayjs().add(1, "days"),
    dropOffTime: dayjs(),
  };

  const { control } = useForm({
    defaultValues: defaultParams,
  });

  const updateUrlParams = (newParams: Record<string, string>) => {
    const currentParams = new URLSearchParams(window.location.search);

    // Update the URL search params
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        currentParams.set(key, value);
      }
    });

    // Update the URL without reloading the page
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${currentParams.toString()}`
    );
  };

  const handleSelectChange = (
    value: string | number,
    label: "pickUpLocation" | "dropOffLocation"
  ) => {
    const newParams = { [label]: value.toString() };
    setFilterQuery(newParams);
    updateUrlParams(newParams);
  };

  const handleDateTimeChange = (
    value: dayjs.Dayjs | null,
    label: "pickUpDate" | "pickUpTime" | "dropOffDate" | "dropOffTime"
  ) => {
    if (!value) return;

    const updatedValue = value.format(
      label.includes("Date") ? "YYYY-MM-DD" : "HH:mm"
    );

    const newParams = { [label]: updatedValue };
    setFilterQuery(newParams);
    updateUrlParams(newParams);

    if (label === "pickUpDate") {
      const newPickUpDate = value;
      setPickUpDate(newPickUpDate);

      if (newPickUpDate.isAfter(dropOffDate)) {
        const newDropOffDate = newPickUpDate.add(1, "day");
        setDropOffDate(newDropOffDate);
        updateUrlParams({ dropOffDate: newDropOffDate.format("YYYY-MM-DD") });
      }
    } else if (label === "dropOffDate") {
      const newDropOffDate = value;
      if (newDropOffDate.isBefore(pickUpDate)) {
        return;
      }
      setDropOffDate(newDropOffDate);
    }

    // Update time if it's pickUpTime or dropOffTime
    if (label === "pickUpTime") {
      setPickUpTime(value);
    } else if (label === "dropOffTime") {
      setDropOffTime(value);
    }
  };

  if (loading) return <LoadingFilter width={"100%"} />;

  return (
    <Box
      display="flex"
      gap={1}
      mt={2}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: "semiBold",
          textAlign: "center",
          mb: 2,
          color: Colors.Black,
        }}
      >
        Book your car
      </Typography>
      <DropdownSelect
        sx={{ width: "100%" }}
        name="pickUpLocation"
        control={control}
        label="Pick up Location"
        onChange={(selectedValue: any) =>
          handleSelectChange(selectedValue, "pickUpLocation")
        }
        options={[
          { label: "Kutaisi International Airport (KUT)", value: "kutaisi" },
          { label: "Batumi", value: "batumi" },
        ]}
      />

      <DropdownSelect
        sx={{ width: "100%" }}
        name="dropOffLocation"
        control={control}
        label="Drop off Location"
        onChange={(selectedValue: any) =>
          handleSelectChange(selectedValue, "dropOffLocation")
        }
        options={[
          { label: "Kutaisi International Airport (KUT)", value: "kutaisi" },
          { label: "Batumi", value: "batumi" },
        ]}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box width={"100%"} display={"flex"}>
          <DatePicker
            label="Pick up Date"
            value={pickUpDate}
            onChange={(value) => handleDateTimeChange(value, "pickUpDate")}
            slotProps={{ textField: inputStyles }}
            minDate={minDate}
          />
          <TimePicker
            label="Pick up Time"
            value={pickUpTime}
            onChange={(value) => handleDateTimeChange(value, "pickUpTime")}
            slotProps={{ textField: inputStyles }}
          />
        </Box>
        <Box display={"flex"} width={"100%"}>
          <DatePicker
            label="Drop off Date"
            value={dropOffDate}
            onChange={(value) => handleDateTimeChange(value, "dropOffDate")}
            slotProps={{ textField: inputStyles }}
            minDate={pickUpDate.add(1, "day")}
          />
          <TimePicker
            label="Drop off Time"
            value={dropOffTime}
            onChange={(value) => handleDateTimeChange(value, "dropOffTime")}
            slotProps={{ textField: inputStyles }}
          />
        </Box>
      </LocalizationProvider>
      <Typography
        color={Colors.SecondaryGrey}
        fontWeight={"bold"}
        fontSize={"10px"}
        alignSelf={"flex-start"}
      >
        Total cost reflects the full rental period, not a daily rate.
      </Typography>
    </Box>
  );
};
