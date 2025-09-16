"use client";
import { DropdownSelect } from "@/components";
import { useFilterMenu } from "@/store/useFilterMenu";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingFilter from "../common/LoadingFilter";

const SortBy = () => {
  const { loading, setFilterQuery } = useFilterMenu();
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);
  const [sortValue, setSortValue] = useState("");

  const { control, setValue } = useForm({
    defaultValues: { sortBy: "" },
  });

  useEffect(() => {
    // Load "ordering" query from the URL when the component mounts
    const params = new URLSearchParams(window.location.search);
    const orderingParam = params.get("ordering");

    if (orderingParam) {
      setSortValue(orderingParam);
      setValue("sortBy", orderingParam);
    }

    setIsSessionLoaded(true);
  }, [setValue]);

  useEffect(() => {
    if (isSessionLoaded) {
      const updatedParams = new URLSearchParams(window.location.search);
      if (sortValue) {
        updatedParams.set("ordering", sortValue); // Update the "ordering" parameter in the URL
      } else {
        updatedParams.delete("ordering"); // Remove the "ordering" parameter if no sort value
      }

      // Update the URL without reloading the page
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${updatedParams.toString()}`
      );

      // Update the filter query with the new value
      const updatedFilterParams = {
        ordering: sortValue,
      };
      setFilterQuery(updatedFilterParams);
    }
  }, [sortValue, isSessionLoaded, setFilterQuery]);

  const handleSelectChange = (value: string | number) => {
    setSortValue(value.toString());
  };

  if (loading || !isSessionLoaded) return <LoadingFilter width={"200px"} />;

  return (
    <DropdownSelect
      sx={{ width: "200px", height: "40px" }}
      name="sortBy"
      control={control}
      label="Sort By"
      onChange={(selectedValue: any) => handleSelectChange(selectedValue)}
      options={[
        { value: "-price", label: "Price: high to low" },
        { value: "price", label: "Price: low to high" },
        { value: "brand", label: "Name: A-Z" },
        { value: "-brand", label: "Name: Z-A" },
      ]}
    />
  );
};

export default SortBy;
