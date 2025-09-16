"use client";
import LoadingFilter from "@/modules/common/LoadingFilter";
import { useFilterMenu } from "@/store/useFilterMenu";
import { Colors } from "@/styles/colors";
import car from "../../../../public/assets/svg/SUV.svg";
import car1 from "../../../../public/assets/svg/hatchback.svg";
import car2 from "../../../../public/assets/svg/sedan.svg";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const carTypes = [
  { id: 1, name: "SUV", svg: car1 },
  { id: 2, name: "Sedan", svg: car2 },
  {
    id: 3,
    name: "Hatchback",
    svg: car1,
  },
  { id: 4, name: "Minivan", svg: car },
  { id: 5, name: "Crossover", svg: car2 },
  { id: 6, name: "Coupe", svg: car2 },
];

export const TypesFilter = () => {
  const { loading, setFilterQuery } = useFilterMenu();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");

    if (typeParam) {
      setCheckedItems(typeParam.split(","));
    }
  }, []);

  useEffect(() => {
    const updatedParams = new URLSearchParams(window.location.search);

    if (checkedItems.length > 0) {
      updatedParams.set("type", checkedItems.join(","));
    } else {
      updatedParams.delete("type");
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${updatedParams.toString()}`
    );

    const sessionData = sessionStorage.getItem("");
    const storedParams = sessionData ? JSON.parse(sessionData) : {};

    const updatedFilterParams = {
      ...storedParams,
      type: checkedItems,
    };

    setFilterQuery(updatedFilterParams);
  }, [checkedItems, setFilterQuery]);

  const handleChange = (type: string) => {
    setCheckedItems((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  if (loading) return <LoadingFilter width={"45%"} />;

  return (
    <Box marginRight={"auto"} mb={1} mt={1}>
      <Typography
        sx={{
          color: Colors.PrimaryMain,
          fontWeight: "bold",
          fontSize: { xs: "13px", sm: "12px" },
          lineHeight: "18px",
          marginRight: "auto",
          my: "5px",
        }}
      >
        FILTER BY CAR TYPE:
      </Typography>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          my: "10px",
          gap: { xs: "5px", sm: "10px" },
          ml: { xs: "13px", sm: "12px" },
        }}
      >
        {carTypes.map(({ id, name, svg }) => (
          <FormControlLabel
            key={id}
            control={
              <Checkbox
                checked={checkedItems.includes(name)}
                onChange={() => handleChange(name)}
                sx={{
                  display: "none",
                  "&.Mui-checked + .MuiFormControlLabel-label": {
                    backgroundColor: Colors.Accent,
                    color: "white",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: { xs: "11px", sm: "13px" },
                  padding: { xs: "4px 6px", sm: "7px 15px" },
                  borderRadius: "5px",
                  cursor: "pointer",
                  letterSpacing: "0.5px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  backgroundColor: Colors.Background,
                  border: checkedItems.includes(name)
                    ? `2px solid ${Colors.Accent}`
                    : "2px solid transparent",
                  color: "#596780",
                }}
              >
                {name}
                {/* <Image src={svg} width={50} height={20} alt="car" color="red" /> */}
              </Typography>
            }
          />
        ))}
      </FormGroup>
    </Box>
  );
};
