import { RentalForm } from "@/components";
import {
  getISO,
  getOptionalServices,
  getSingleCar,
} from "@/libs/CarsList/getCarsList";
import RentalDetails from "@/modules/RentalDetails";
import { Box } from "@mui/material";
import React from "react";

const page = async ({ params: paramsPromise, searchParams }: any) => {
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

  const optionalServices: any = await getOptionalServices();
  const isoData: any = await getISO();
  const singleCarData: any = await getSingleCar(
    Number(id),
    pickUpLocation,
    start_date,
    end_date
  );

  const ISO = isoData.map((item: any) => ({
    name: `${item.emoji} ${item.dial_code}`,
    value: item.code,
    code: item.dial_code,
  }));

  return (
    <Box
      display={"flex"}
      position={"relative"}
      minHeight={"100vh"}
      gap={2}
      flexDirection={"row"}
      alignItems={"flex-start"}
    >
      <RentalForm
        optionalServices={optionalServices}
        ISO={ISO}
        singleCarData={singleCarData}
      />
      <RentalDetails singleCarData={singleCarData} />
    </Box>
  );
};

export default page;
