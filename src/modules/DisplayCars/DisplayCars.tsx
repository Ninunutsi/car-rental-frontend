import { Box, Divider } from "@mui/material";
import React from "react";
import { getCarsList } from "@/libs/CarsList/getCarsList";
import CarsList from "../CarsList";
import CarListHeader from "../CarListHeader";

const DisplayCars = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const page = (await searchParams)?.page || 1;
  const data = await getCarsList(Number(page));
  return (
    <Box position={"relative"}>
      <Divider flexItem sx={{ mb: 1, mt: 3 }} />
      <CarListHeader count={data.count} />
      <CarsList />
    </Box>
  );
};

export default DisplayCars;
