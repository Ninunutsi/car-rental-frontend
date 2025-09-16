import { Box, Typography } from "@mui/material";
import React from "react";
import SectionsHeader from "../SectionsHeader";
import { QuestionForm } from "@/components";

const SendAQuestion = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"stretch"} // Ensure children stretch to fill height
        margin={"auto"}
        gap={1}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ padding: { xs: "2rem 0", md: "4.5rem 0" }, height: "100%" }} // Make sure the parent has height
      >
        <Box
          mb={{ xs: "1rem", md: "0" }}
          sx={{
            background: "#3563E9",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem", // Add some padding
            borderRadius: "0.5rem",
            mx: { xs: 1, md: "0" },
          }}
        >
          <SectionsHeader
            question="Do you have"
            heading="Any Questions?"
            headingColor="#FFFFFF"
          />
          <Typography
            variant="body1"
            color={"#F6F7F9"}
            fontSize={"17px"}
            lineHeight={"25px"}
            fontWeight={"bold"}
            width={"80%"}
            margin={"1rem auto"}
            textAlign={"center"}
          >
            Ask us a question and we will get back to you as soon as possible.
          </Typography>
        </Box>
        <QuestionForm />
      </Box>
    </Box>
  );
};

export default SendAQuestion;
