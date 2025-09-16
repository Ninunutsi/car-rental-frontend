"use client";
import React, { useEffect, useMemo } from "react";
import dayjs from "dayjs";
import { useFilterMenu } from "@/store/useFilterMenu";

interface Params {
  pickUpLocation: string;
  dropOffLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  dropOffDate: string;
  dropOffTime: string;
  ordering: string;
  type: string[];
  page: string;
}

export const SessionWatcher: React.FC = () => {
  const { handleLoading } = useFilterMenu();

  const defaultParams: Params = useMemo(
    () => ({
      pickUpLocation: "kutaisi",
      dropOffLocation: "kutaisi",
      pickUpDate: dayjs().format("YYYY-MM-DD"),
      pickUpTime: dayjs().format("HH:mm"),
      dropOffDate: dayjs().add(1, "days").format("YYYY-MM-DD"),
      dropOffTime: dayjs().format("HH:mm"),
      ordering: "",
      type: [],
      page: "1",
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams();

      // Add default params to query string
      queryParams.set("pickUpLocation", defaultParams.pickUpLocation);
      queryParams.set("dropOffLocation", defaultParams.dropOffLocation);
      queryParams.set("pickUpDate", defaultParams.pickUpDate);
      queryParams.set("pickUpTime", defaultParams.pickUpTime);
      queryParams.set("dropOffDate", defaultParams.dropOffDate);
      queryParams.set("dropOffTime", defaultParams.dropOffTime);
      queryParams.set("ordering", defaultParams.ordering);
      queryParams.set("type", defaultParams.type.join(","));
      queryParams.set("page", defaultParams.page);

      // Update the browser history with the new query string
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${queryParams.toString()}`
      );

      // Trigger loading state
      handleLoading();
    }
  }, [defaultParams, handleLoading]);

  return null;
};
