"use client";
import React from "react";
import Slider from "@/modules/common/Slider";
import { Box, Divider } from "@mui/material";
import { Text } from "@/components";
import { Colors } from "@/styles/colors";
import { Button } from "../../components/index";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { calculateDaysBetween, formatDateYear } from "@/utils/functions";
import { useSearchParams } from "next/navigation";

const CarDetails = ({ singleCar: data }: { singleCar: any }) => {
  const searchParams = useSearchParams();
  const pick_location = searchParams.get("pickUpLocation");
  const dropLocation = searchParams.get("dropOffLocation");
  const start_date = searchParams.get("pickUpDate");
  const end_date = searchParams.get("dropOffDate");
  const days = calculateDaysBetween(String(start_date), String(end_date));

  const pickUp = formatDateYear(new Date(start_date as string));
  const dropOff = formatDateYear(new Date(end_date as string));

  const currentQueryParams =
    typeof window !== "undefined" ? window.location.search : "";

  const dataArr = [
    { name: "Year", value: data.year },
    { name: "License", value: data.license_plate_no },
    { name: "Body Type", value: data.body_type },
    { name: "Color", value: data.body_color },
    { name: "Seats", value: data.seats },
    { name: "Doors", value: data.number_of_doors },
  ];

  return (
    <>
      {/* Back link */}
      <Link
        href="/"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <Text.BodyText
          display="flex"
          alignItems="center"
          fontSize={{ xs: "13px", sm: "14px" }}
          sx={{ cursor: "pointer" }}
          mb={2}
        >
          <ArrowBackIosIcon fontSize="small" /> Back to Cars
        </Text.BodyText>
      </Link>

      {/* Main Info Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        gap={{ xs: 3, md: 5 }}
      >
        {/* Left - Slider */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Slider car_images={data.car_images} />
        </Box>

        {/* Right - Car Details */}
        <Box width={{ xs: "100%", md: "50%" }} p={{ xs: 1, md: 2 }}>
          <Text.Title
            fontWeight="bold"
            fontSize={{ xs: "28px", sm: "36px", md: "40px" }}
          >
            {data.brand} {data.model}
          </Text.Title>

          <Text.Subtitle
            fontWeight="bold"
            color={Colors.Accent}
            fontSize={{ xs: "20px", sm: "22px", md: "25px" }}
            my={1}
          >
            {data.price}$
          </Text.Subtitle>

          <Text.BodyText
            sx={{
              color: Colors.SecondaryGrey,
              fontSize: { xs: "12px", sm: "13px" },
              mb: 2,
            }}
          >
            <strong>Total cost reflects the full rental period.</strong>
            <br />
            Prices may change depending on rental length and conditions.
          </Text.BodyText>

          {/* Quick Facts Grid */}
          <Box
            width="100%"
            mt={2}
            mb={2}
            display="grid"
            gridTemplateColumns={{
              xs: "1fr 1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            }}
            gap={2}
          >
            {dataArr.map(({ name, value }, index) => (
              <Box
                key={index}
                height="100px"
                borderRadius="10px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                sx={{ backgroundColor: Colors.Background }}
              >
                <Text.BodyText fontWeight="bold" fontSize="15px">
                  {name}
                </Text.BodyText>
                <Text.BodyText color={Colors.SecondaryGrey} fontSize="15px">
                  {value}
                </Text.BodyText>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* Booking Info */}
          <Box mt={3}>
            <Text.Title fontWeight="bold" fontSize={{ xs: "18px", md: "20px" }}>
              Secure Your Spot
            </Text.Title>
            <Text.BodyText
              sx={{
                color: Colors.SecondaryGrey,
                fontSize: { xs: "12px", sm: "13px" },
                mt: 1,
              }}
            >
              Pick up in <strong>{pick_location}</strong>, drop off in{" "}
              <strong>{dropLocation}</strong>,{" "}
              <strong>
                {pickUp} — {dropOff}
              </strong>
              . Total rent price:
              <strong style={{ color: Colors.Accent }}>
                {" "}
                {Number(data.price)}$
              </strong>{" "}
              for {days} days.
            </Text.BodyText>

            <Link href={`${data.id}/rent/${currentQueryParams}`}>
              <Button
                label="Book Now"
                type="button"
                size="large"
                sx={{
                  width: { xs: "90%", sm: "200px" },
                  height: { xs: "50px", sm: "unset" },
                  mt: 2,
                  position: { xs: "fixed", md: "unset" },
                  bottom: { xs: "20px", md: "unset" },
                  right: { xs: "20px", md: "unset" },
                  zIndex: { xs: 10, md: "unset" },
                }}
                icon={<BookmarkIcon />}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Vehicle Details + Safety */}
      <Box
        mt={5}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 4, md: 6 }}
      >
        {/* Vehicle Details */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Text.Title fontWeight="bold" fontSize={{ xs: "18px", md: "20px" }}>
            Vehicle Details
          </Text.Title>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            mt={2}
          >
            {[
              { label: "Engine Capacity", value: data.engine_capacity },
              { label: "Engine Power", value: data.engine_power },
              { label: "Transmission", value: data.transmission },
              { label: "Fuel", value: data.fuel },
              { label: "Fuel Consumption", value: data.fuel_consumption },
              { label: "Tank Size", value: data.tank_size },
              { label: "Airbags", value: data.airbags },
              {
                label: "Driving License Category",
                value: data.driving_license_category,
              },
              { label: "Drive", value: data.drive },
              { label: "Interior", value: data.interior },
              { label: "Roof", value: data.roof },
              { label: "Powered Windows", value: data.powered_windows },
              { label: "Side Wheel", value: data.side_wheel },
            ].map((item, index) => (
              <Box
                key={index}
                py={1}
                borderBottom="1px solid #e4e4e4"
                display="flex"
                justifyContent="space-between"
              >
                <Text.BodyText fontSize="14px" fontWeight="bold">
                  {item.label}:
                </Text.BodyText>
                <Text.BodyText fontSize="14px" color={Colors.SecondaryGrey}>
                  {item.value}
                </Text.BodyText>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Safety Features */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Box display="flex" gap={1} mb={3} flexWrap="wrap">
            {["CDW", "Free Cancellation", "Theft Protection"].map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: "7px 14px",
                    bgcolor: Colors.AccentLight,
                    borderRadius: "6px",
                    fontSize: "14px",
                    color: Colors.PrimaryMain,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Box>
              )
            )}
          </Box>

          <Text.Title fontWeight="bold" fontSize={{ xs: "18px", md: "20px" }}>
            Safety Features
          </Text.Title>
          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            {[
              { label: "ABS", value: data.abs },
              { label: "EBD", value: data.ebd },
              { label: "ESP", value: data?.esp },
              { label: "Rear View Camera", value: data.rear_view_camera },
              { label: "Parking Assist", value: data.parking_assist },
            ].map(
              (item, index) =>
                item.value && (
                  <Box
                    key={index}
                    width={{ xs: "48%", sm: "45%", md: "30%" }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <CheckCircleIcon sx={{ fontSize: 20, color: "#659711" }} />
                    <Text.BodyText fontSize="14px">{item.label}</Text.BodyText>
                  </Box>
                )
            )}
          </Box>
        </Box>
      </Box>

      {/* Requirements + Comfort */}
      <Box
        mt={5}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 4, md: 6 }}
      >
        {/* Requirements */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Text.Title fontWeight="bold" fontSize={{ xs: "18px", md: "20px" }}>
            Requirements
          </Text.Title>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
            gap={2}
            mt={2}
          >
            {[
              {
                label: "Mileage limit",
                value: data.requirements.mileage_limit,
              },
              { label: "Deposit", value: data.requirements.deposit },
              { label: "Franchise", value: data.requirements.franchise },
            ].map((item, index) => (
              <Box
                key={index}
                py={1}
                borderBottom="1px solid #e4e4e4"
                display="flex"
                justifyContent="space-between"
              >
                <Text.BodyText fontSize="14px" fontWeight="bold">
                  {item.label}:
                </Text.BodyText>
                <Text.BodyText fontSize="14px" color={Colors.SecondaryGrey}>
                  {item.value}
                </Text.BodyText>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Comfort Features */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Text.Title fontWeight="bold" fontSize={{ xs: "18px", md: "20px" }}>
            Comfort & Convenience
          </Text.Title>
          <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
            {[
              { label: "Cruise Control", value: data.cruise_control },
              { label: "Radio", value: data.multimedia_features?.radio },
              { label: "Audio CD", value: data.multimedia_features.audio_cd },
              { label: "Bluetooth", value: data.multimedia_features.bluetooth },
              { label: "MP3", value: data.multimedia_features.mp3 },
              { label: "USB", value: data.multimedia_features.usb },
              { label: "AUX", value: data.multimedia_features.aux },
              { label: "Air Conditioning", value: data.air_conditioning },
            ].map(
              (item, index) =>
                item.value && (
                  <Box
                    key={index}
                    width={{ xs: "48%", sm: "45%", md: "30%" }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <CheckCircleIcon sx={{ fontSize: 20, color: "#659711" }} />
                    <Text.BodyText fontSize="14px">{item.label}</Text.BodyText>
                  </Box>
                )
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CarDetails;
