"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getCarsList } from "@/libs/CarsList/getCarsList";
import dayjs from "dayjs";
import { useFilterMenu } from "@/store/useFilterMenu";

export default function useCarsList() {
  const { filterQuery } = useFilterMenu();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getUrlParams = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const location = params.get("pickUpLocation") || "kutaisi";
    const sortValue = params.get("ordering") || "";
    const pickUpDate = params.get("pickUpDate") || dayjs().format("YYYY-MM-DD");
    const dropOffDate =
      params.get("dropOffDate") || dayjs().add(1, "days").format("YYYY-MM-DD");
    const pickUpTime = params.get("pickUpTime") || dayjs().format("HH:mm");
    const dropOffTime = params.get("dropOffTime") || dayjs().format("HH:mm");
    const type = params.getAll("type") || [];
    const page = params.get("page") || "1";

    return {
      location,
      sortValue,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
      type,
      page,
    };
  }, []);

  const cleanedParams = useMemo(() => {
    const urlParams = getUrlParams();
    const start_date = `${urlParams.pickUpDate}T${urlParams.pickUpTime}`;
    const end_date = `${urlParams.dropOffDate}T${urlParams.dropOffTime}`;

    return {
      location: urlParams.location,
      start_date,
      end_date,
      sortValue: urlParams.sortValue,
      type: urlParams.type,
      page: urlParams.page,
      ...filterQuery,
    };
  }, [getUrlParams, filterQuery]);
  const fetchCars = useCallback(
    async (page: number) => {
      setIsLoading(true);
      setIsFetching(true);
      setIsError(false);
      try {
        const response = await getCarsList(
          page,
          cleanedParams.location,
          cleanedParams.start_date,
          cleanedParams.end_date,
          cleanedParams.sortValue,
          cleanedParams.type
        );
        setData(response);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsFetching(false);
      }
    },
    [cleanedParams]
  );

  useEffect(() => {
    fetchCars(Number(cleanedParams.page));
  }, [fetchCars, cleanedParams.page]);

  return {
    data,
    isError,
    isLoading,
    isFetching,
    refetch: fetchCars,
  };
}
