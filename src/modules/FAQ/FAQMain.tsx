import React from "react";
import SingleFAQ from "./SingleFAQ";
import { Box } from "@mui/material";
import SectionsHeader from "../SectionsHeader";

const FAQMain = () => {
  return (
    <Box margin={"auto"} mt={10} mb={7}>
      <SectionsHeader
        question="Take a look at the"
        heading="Frequently Asked Questions"
      />
      <SingleFAQ />
    </Box>
  );
};

export default FAQMain;
