"use client";
import React from "react";
import { Pagination } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Colors } from "@/styles/colors";

const PaginationComp = ({
  totalPages,
  refetch,
}: {
  totalPages: number;
  refetch: any;
}) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const params = new URLSearchParams(window.location.search);
    // const params = new URLSearchParams(searchParams.toString());
    params.set("page", value.toString());
    updateUrlParams({ page: value.toString() });
    refetch(value.toString());
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      sx={{
        "& .MuiPaginationItem-root": {
          color: Colors.Black,
          "&.Mui-selected": {
            backgroundColor: Colors.Accent,
            color: "white",
          },
        },
      }}
    />
  );
};

export default PaginationComp;
