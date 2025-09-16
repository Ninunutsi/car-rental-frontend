// import { useState, useEffect, useCallback } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getItemFromSessionStorage } from "../functions";

// const getSessionStorage = (key: string) => {
//   if (typeof window !== "undefined") {
//     return sessionStorage.getItem(key) || "";
//   }
//   return "";
// };

// const useFilteredData = () => {
//   const [filters, setFilters] = useState({
//     pickUpLocation: getItemFromSessionStorage("filteredData")?.pickUpLocation,
//     dropOffLocation: getItemFromSessionStorage("filteredData")?.dropOffLocation,
//     pickUpDateTime:
//       getItemFromSessionStorage("filteredData")?.pickUpDate +
//       "T" +
//       getItemFromSessionStorage("filteredData")?.pickUpTime,
//     dropOffDateTime:
//       getItemFromSessionStorage("filteredData")?.dropOffDate +
//       "T" +
//       getItemFromSessionStorage("filteredData")?.dropOffTime,
//   });

//   const fetchFilteredData = async () => {
//     console.log("Fetching updated data...");
//     const response = await fetch(
//       `http://127.0.0.1:8000/api/cars/?location=${filters.pickUpLocation}&start_date=${filters.pickUpDateTime}&end_date=${filters.dropOffDateTime}`,
//       {
//         cache: "no-cache",
//         headers: {
//           Authorization: "Token bd6e3f341926e5e9ca3287f2fea5b5bc74d890f6",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) throw new Error("Failed to fetch data");
//     return response.json();
//   };

//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["filteredData", filters],
//     queryFn: fetchFilteredData,
//     enabled: !!filters.pickUpLocation && !!filters.dropOffLocation,
//   });

//   // Function to update filters and re-fetch data
//   const updateFilters = useCallback(() => {
//     const updatedFilters = {
//       pickUpLocation: getSessionStorage("pickUpLocation"),
//       dropOffLocation: getSessionStorage("dropOffLocation"),
//       pickUpDateTime:
//         getSessionStorage("pickUpDate") + "T" + getSessionStorage("pickUpTime"),
//       dropOffDateTime:
//         getSessionStorage("dropOffDate") +
//         "T" +
//         getSessionStorage("dropOffTime"),
//     };

//     setFilters(updatedFilters);
//     refetch(); // ✅ Trigger re-fetch on session storage change
//   }, [refetch]);

//   // Effect to listen for sessionStorage changes
//   useEffect(() => {
//     window.addEventListener("storage", updateFilters);

//     return () => {
//       window.removeEventListener("storage", updateFilters);
//     };
//   }, [updateFilters]);

//   return { data, isLoading, isError };
// };

// export default useFilteredData;
