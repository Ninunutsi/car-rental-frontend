import { getSingleCar } from "@/libs/CarsList/getCarsList";
import CarDetails from "@/modules/CarDetails";
import { Colors } from "@/styles/colors";
import { Box } from "@mui/material";
import React from "react";

export const dynamic = "force-dynamic";
const Page = async ({
  params: paramsPromise,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  try {
    const params = await paramsPromise;
    const { id } = params;

    const { pickUpLocation, pickUpDate, pickUpTime, dropOffDate, dropOffTime } =
      searchParams;

    if (
      !pickUpLocation ||
      !pickUpDate ||
      !pickUpTime ||
      !dropOffDate ||
      !dropOffTime
    ) {
      return <div>Missing required query parameters.</div>;
    }

    const start_date = `${pickUpDate}T${pickUpTime}`;
    const end_date = `${dropOffDate}T${dropOffTime}`;

    const singleCarData = await getSingleCar(
      Number(id),
      pickUpLocation,
      start_date,
      end_date
    );

    return (
      <Box
        sx={{
          backgroundColor: Colors.White,
          borderRadius: "8px",
          padding: { xs: "15px", sm: "30px 60px" },
          my: 2,
        }}
      >
        <CarDetails singleCar={singleCarData} />
      </Box>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading car details. Please try again later.</div>;
  }
};

export default Page;
