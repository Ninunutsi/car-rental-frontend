"use client";
import LoadingCard from "@/modules/common/LoadingCard";
import { Box, Typography } from "@mui/material";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Image from "next/image";
import sache from "../../../../public/assets/svg/sache.svg";
import people from "../../../../public/assets/svg/people.svg";
import petrol from "../../../../public/assets/svg/petrol.svg";
import noimg from "../../../../public/assets/img/Img.png";
import { Colors } from "@/styles/colors";
import { Button } from "../button/button";

export const CarCard = ({
  id,
  body_type,
  brand,
  model,
  tank_size,
  seats,
  price,
  thumbnail_url,
  loading,
  transmission,
}: {
  id: number;
  brand: string;
  model: string;
  body_type: string;
  tank_size: number;
  seats: number;
  price: number;
  thumbnail_url: string;
  loading?: boolean;
  transmission: string;
}) => {
  return (
    <Box
      key={id}
      boxShadow={1}
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px 15px",
        width: { xs: "100%", sm: "100%", md: "100%" },
        cursor: "pointer",
        m: { xs: "auto", sm: "unset" },
      }}
    >
      {loading ? (
        <LoadingCard />
      ) : (
        <Box>
          <Box display={"flex"} gap={2}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#3563E9",
                padding: "3px 2px",
                fontSize: "12px",
                borderRadius: "2px",
                gap: "3px",
                fontWeight: "bold",
              }}
            >
              <CheckBoxIcon sx={{ fontSize: "16px" }} /> Full insurance
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#90A3BF",
                padding: "3px 2px",
                fontSize: "12px",
                fontWeight: "bold",
                borderRadius: "2px",
                gap: "3px",
              }}
            >
              <HandshakeIcon sx={{ fontSize: "16px" }} /> Free cancellation
            </Typography>
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            overflow={"hidden"}
            mb={3}
          >
            <Image
              src={!thumbnail_url.includes("example") ? thumbnail_url : noimg}
              alt={`${brand}'s car`}
              width={270}
              height={220}
              priority={true}
              quality={100}
              objectFit={"contain"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#1A202C", fontWeight: "bold" }}
              >
                {brand} {model}
              </Typography>
              <Typography color={"#90A3BF"} fontWeight={"bold"}>
                {body_type}
              </Typography>
            </Box>
            <Typography
              color={Colors.Accent}
              fontSize={"22px"}
              fontWeight={"bold"}
            >
              ${price}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", sm: "space-between" },
              gap: { xs: 1, sm: "unset" },
              my: "1.2rem",
              color: "#90A3BF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                fontSize: "14px",
              }}
            >
              <Image src={petrol} alt="petrol" width={18} height={18} />{" "}
              {tank_size}L
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                fontSize: "14px",
              }}
            >
              <Image src={sache} alt="sache" width={18} height={18} />{" "}
              {transmission}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                fontSize: "14px",
              }}
            >
              <Image src={people} alt="people" width={18} height={18} /> {seats}{" "}
              People
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Box>
        </Box>
      )}
      <Button
        label="View Details"
        sx={{
          width: "100%",
          fontWeight: "bold",
          borderRadius: "12px",
          p: "10px",
        }}
      />
    </Box>
  );
};
