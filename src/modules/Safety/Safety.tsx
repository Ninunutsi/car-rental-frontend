import { Box, Typography } from "@mui/material";
import React from "react";
import { SafetyCertificateOutlined } from "@ant-design/icons";

const Safety = () => {
  return (
    <Box mt={"20px"}>
      <SafetyCertificateOutlined
        style={{ fontSize: "35px", color: "#3563E9" }}
      />
      <Typography variant="body1" mt={1} color={"#1A202C"} fontWeight={"bold"}>
        All your data are safe
      </Typography>
      <Typography variant="caption" color={"#90A3BF"} mt={1}>
        We are using the most advanced security to provide you with the best
        experience ever.
      </Typography>
    </Box>
  );
};

export default Safety;
