"use client";

import { getSingleCar } from "@/libs/CarsList/getCarsList";
import { useQuery } from "@tanstack/react-query";

export default function useSingleCar(initialData: any) {
  const sessionParams = JSON.parse(
    sessionStorage.getItem("sessionParams") || "{}"
  );
  const location = sessionParams.pickUpLocation || null;
  const pickUpDate = sessionParams.pickUpDate || null;
  const dropOffDate = sessionParams.dropOffDate || null;
  const pickUpTime = sessionParams.pickUpTime || null;
  const dropOffTime = sessionParams.dropOffTime || null;

  const start_date =
    pickUpDate && pickUpTime ? `${pickUpDate}T${pickUpTime}` : null;
  const end_date =
    dropOffDate && dropOffTime ? `${dropOffDate}T${dropOffTime}` : null;

  const fetchSingleCar = async () => {
    return getSingleCar(1, location, start_date, end_date);
  };

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["cars", location, start_date, end_date],
    queryFn: fetchSingleCar,
    initialData,
  });

  return { data, isError, isLoading, isFetching };
}
