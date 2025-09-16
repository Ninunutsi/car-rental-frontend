"use client";
import { Text } from "@/components";
import { Colors } from "@/styles/colors";
import { Box, Divider, useMediaQuery, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { calculateDaysBetween, formatDate } from "@/utils/functions";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useCarDetails } from "@/store/useCarDetails";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams } from "next/navigation";

const RentalDetails = ({ singleCarData }: { singleCarData: any }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { optionalServices } = useCarDetails();
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const pick_location = searchParams.get("pickUpLocation");
  const drop_ocation = searchParams.get("dropOffLocation");
  const start_date = searchParams.get("pickUpDate");
  const end_date = searchParams.get("dropOffDate");
  const days = calculateDaysBetween(String(start_date), String(end_date));

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              backgroundColor: Colors.Accent,
              color: Colors.White,
              zIndex: 2000,
              "&:hover": { backgroundColor: Colors.Accent },
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer */}
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                width: "80vw",
                maxWidth: "400px",
                padding: "25px",
                backgroundColor: Colors.White,
              }}
            >
              <Text.Title
                fontSize={"23px"}
                lineHeight={"33px"}
                fontWeight={"bold"}
              >
                Rental Summary
              </Text.Title>
              <Text.BodyText
                sx={{
                  color: Colors.SecondaryGrey,
                  fontSize: "12px",
                  fontWeight: "normal",
                  mb: 1,
                }}
              >
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </Text.BodyText>
              <Box>
                <Box
                  mt={1}
                  mb={1}
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                >
                  <CarRentalIcon
                    fontSize="large"
                    sx={{ color: Colors.Accent }}
                  />
                  <Box>
                    <Text.BodyText fontSize={"14px"}>
                      <strong>Brand: </strong> {singleCarData.brand}
                    </Text.BodyText>
                    <Text.BodyText fontSize={"14px"}>
                      <strong>Model: </strong>
                      {singleCarData.model}
                    </Text.BodyText>
                  </Box>
                </Box>
                <Divider />
                <Box mt={1} mb={1}>
                  <Text.Subtitle
                    fontSize={"15px"}
                    lineHeight={"25px"}
                    fontWeight={"bold"}
                  >
                    Cost
                  </Text.Subtitle>
                  <Text.BodyText fontSize={"13px"}>
                    <strong>Rent for {days} days </strong> -
                    {Number(singleCarData.price)}$
                  </Text.BodyText>
                  <Text.BodyText
                    sx={{
                      color: Colors.SecondaryGrey,
                      fontSize: "12px",
                      fontWeight: "normal",
                    }}
                  >
                    Pick up in
                    {searchParams
                      ? ` ${pick_location}, ${formatDate(String(start_date))}`
                      : "Loading..."}
                  </Text.BodyText>
                  <Text.BodyText
                    sx={{
                      color: Colors.SecondaryGrey,
                      fontSize: "12px",
                      fontWeight: "normal",
                      mb: 1,
                    }}
                  >
                    Drop off in
                    {searchParams
                      ? ` ${drop_ocation}, ${formatDate(String(end_date))}`
                      : "Loading..."}
                  </Text.BodyText>
                </Box>

                {optionalServices && optionalServices.length !== 0 && (
                  <>
                    <Divider />
                    <Box mb={1}>
                      <Text.Subtitle
                        fontSize={"15px"}
                        lineHeight={"25px"}
                        fontWeight={"bold"}
                        mt={1}
                      >
                        Additional Services
                      </Text.Subtitle>
                      {optionalServices.map(
                        ({ id, service_name, quantity, price }) => (
                          <Box
                            display={"flex"}
                            gap={1}
                            alignItems={"center"}
                            key={id}
                          >
                            <FiberManualRecordIcon
                              sx={{ fontSize: "10px", color: Colors.Accent }}
                            />
                            <Text.BodyText fontSize={"14px"}>
                              {service_name} ({quantity}x)
                            </Text.BodyText>
                            <Text.BodyText fontSize={"14px"}>
                              {(Number(price) * Number(quantity)).toFixed(2)}
                            </Text.BodyText>
                          </Box>
                        )
                      )}
                    </Box>
                  </>
                )}
                <Divider />
                <Text.Subtitle
                  fontSize={"15px"}
                  lineHeight={"25px"}
                  fontWeight={"bold"}
                  mt={1}
                >
                  Included:
                </Text.Subtitle>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                  <Text.BodyText fontSize={"14px"}>
                    Personal Accident Insurance
                  </Text.BodyText>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                  <Text.BodyText fontSize={"14px"}>Second Driver</Text.BodyText>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                  <Text.BodyText fontSize={"14px"}>CDW</Text.BodyText>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                  <Text.BodyText fontSize={"14px"}>
                    Free cancellation
                  </Text.BodyText>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                  <Text.BodyText fontSize={"14px"}>
                    Theft Protection
                  </Text.BodyText>
                </Box>
              </Box>
              <Divider sx={{ mt: 2 }} />
              <Text.BodyText
                fontSize={"10px"}
                fontWeight={"bold"}
                sx={{
                  color: Colors.SecondaryGrey,
                  textAlign: "center",
                  lineHeight: "20px",
                  mt: "7px",
                }}
              >
                Wherever Life Takes You, We’ve Got the Wheels!
              </Text.BodyText>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            position: "sticky",
            top: 20,
            minHeight: "500px",
            flexGrow: 1,
            width: "30%",
            mt: "30px",
            borderRadius: "8px",
            backgroundColor: Colors.White,
            padding: "25px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Box
            sx={{
              backgroundColor: Colors.White,
            }}
          >
            <Text.Title
              fontSize={"23px"}
              lineHeight={"33px"}
              fontWeight={"bold"}
            >
              Rental Summary
            </Text.Title>
            <Text.BodyText
              sx={{
                color: Colors.SecondaryGrey,
                fontSize: "12px",
                fontWeight: "normal",
                mb: 1,
              }}
            >
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </Text.BodyText>
            <Box>
              <Box mt={1} mb={1} display={"flex"} alignItems={"center"} gap={2}>
                <CarRentalIcon fontSize="large" sx={{ color: Colors.Accent }} />
                <Box>
                  <Text.BodyText fontSize={"14px"}>
                    <strong>Brand: </strong> {singleCarData.brand}
                  </Text.BodyText>
                  <Text.BodyText fontSize={"14px"}>
                    <strong>Model: </strong>
                    {singleCarData.model}
                  </Text.BodyText>
                </Box>
              </Box>
              <Divider />
              <Box mt={1} mb={1}>
                <Text.Subtitle
                  fontSize={"15px"}
                  lineHeight={"25px"}
                  fontWeight={"bold"}
                >
                  Cost
                </Text.Subtitle>
                <Text.BodyText fontSize={"13px"}>
                  <strong>Rent for {days} days </strong> -{" "}
                  {Number(singleCarData.price)}$
                </Text.BodyText>
                <Text.BodyText
                  sx={{
                    color: Colors.SecondaryGrey,
                    fontSize: "12px",
                    fontWeight: "normal",
                  }}
                >
                  Pick up in
                  {searchParams
                    ? ` ${pick_location}, ${formatDate(String(start_date))}`
                    : "Loading..."}
                </Text.BodyText>
                <Text.BodyText
                  sx={{
                    color: Colors.SecondaryGrey,
                    fontSize: "12px",
                    fontWeight: "normal",
                    mb: 1,
                  }}
                >
                  Drop off in
                  {searchParams
                    ? ` ${drop_ocation}, ${formatDate(String(end_date))}`
                    : "Loading..."}
                </Text.BodyText>
              </Box>

              {optionalServices && optionalServices.length !== 0 && (
                <>
                  <Divider />
                  <Box mb={1}>
                    <Text.Subtitle
                      fontSize={"15px"}
                      lineHeight={"25px"}
                      fontWeight={"bold"}
                      mt={1}
                    >
                      Additional Services
                    </Text.Subtitle>
                    {optionalServices.map(
                      ({ id, service_name, quantity, price }) => (
                        <Box
                          display={"flex"}
                          gap={1}
                          alignItems={"center"}
                          key={id}
                        >
                          <FiberManualRecordIcon
                            sx={{ fontSize: "10px", color: Colors.Accent }}
                          />
                          <Text.BodyText fontSize={"14px"}>
                            {service_name} ({quantity}x)
                          </Text.BodyText>
                          <Text.BodyText fontSize={"14px"}>
                            {(Number(price) * Number(quantity)).toFixed(2)}
                          </Text.BodyText>
                        </Box>
                      )
                    )}
                  </Box>
                </>
              )}
              <Divider />
              <Text.Subtitle
                fontSize={"15px"}
                lineHeight={"25px"}
                fontWeight={"bold"}
                mt={1}
              >
                Included:
              </Text.Subtitle>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                <Text.BodyText fontSize={"14px"}>
                  Personal Accident Insurance
                </Text.BodyText>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                <Text.BodyText fontSize={"14px"}>Second Driver</Text.BodyText>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                <Text.BodyText fontSize={"14px"}>CDW</Text.BodyText>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                <Text.BodyText fontSize={"14px"}>
                  Free cancellation
                </Text.BodyText>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <AdjustIcon sx={{ fontSize: "10px", color: Colors.Accent }} />
                <Text.BodyText fontSize={"14px"}>
                  Theft Protection
                </Text.BodyText>
              </Box>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Text.BodyText
              fontSize={"10px"}
              fontWeight={"bold"}
              sx={{
                color: Colors.SecondaryGrey,
                textAlign: "center",
                lineHeight: "20px",
                mt: "7px",
              }}
            >
              Wherever Life Takes You, We’ve Got the Wheels!
            </Text.BodyText>
          </Box>
        </Box>
      )}
    </>
  );
};

export default RentalDetails;
