"use client";
import { CarCard } from "@/components";
import useCarsList from "@/utils/hooks/useCars";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import PaginationComp from "../common/Pagination";
import LoadingCard from "../common/LoadingCard";
import { Colors } from "@/styles/colors";
import img from "../../../public/assets/svg/nodata.svg";
import Image from "next/image";
const CarsList = () => {
  const { data, isLoading, isFetching, refetch } = useCarsList();
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (data?.results.length === 0)
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: Colors.SecondaryGrey,
            fontWeight: "bold",
            mt: 10,
          }}
        >
          No Results
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mt: 1,
            color: Colors.SecondaryMain,
          }}
        >
          Sorry, there are no results for this search. Please try another
          parameters
        </Typography>
        <Image src={img} width={200} height={200} alt="ar" />
      </Box>
    );

  if (isLoading || isFetching)
    return (
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={3}
        justifyContent={"flex-start"}
      >
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </Box>
    );

  const currentQueryParams =
    typeof window !== "undefined" ? window.location.search : "";
  const refererUrl =
    typeof window !== "undefined" ? window.document.referrer : "";

  return (
    <Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={2}
        mx={{ md: 1 }}
        justifyContent={"flex-start"}
      >
        {data?.results.map(
          ({
            id,
            body_type,
            brand,
            model,
            tank_size,
            seats,
            price,
            thumbnail_url,
            transmission,
          }: any) => (
            <Link
              href={{
                pathname: `/${id}`, // Link to the detailed page
                query: {
                  ...Object.fromEntries(
                    new URLSearchParams(currentQueryParams)
                  ),
                  referer: refererUrl, // Append the referer URL to query params
                },
              }}
              key={id}
              style={{
                textDecoration: "none",
                width: isMobile ? "100%" : "32%",
                margin: isMobile ? "0 10px" : "auto",
              }}
            >
              <CarCard
                id={id}
                body_type={body_type}
                brand={brand}
                model={model}
                tank_size={tank_size}
                seats={seats}
                price={price}
                thumbnail_url={thumbnail_url}
                transmission={transmission}
              />
            </Link>
          )
        )}
      </Box>

      {data?.results.length && (
        <Box mt={5} display={"flex"} justifyContent={"center"}>
          <PaginationComp
            totalPages={Math.ceil(data.count / 10)}
            refetch={refetch}
          />
        </Box>
      )}
    </Box>
  );
};

export default CarsList;
