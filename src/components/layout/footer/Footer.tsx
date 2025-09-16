import { Text } from "@/components";
import { Colors } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/img/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <Box sx={{ py: 2, width: "100%", backgroundColor: "white" }}>
      <Box
        maxWidth="1200px"
        marginX="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign={{ xs: "center", md: "left" }}
        px={{ xs: 2, sm: 4 }}
        py={{ xs: 4, sm: 6 }}
        gap={{ xs: 4, md: 0 }}
      >
        {/* Logo + About */}
        <Box
          width={{ xs: "100%", md: "30%" }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
          mb={{ xs: 3, md: 0 }}
        >
          <Image src={logo} width={140} height={45} alt="geo cars rent logo" />
          <Typography
            fontSize={{ xs: "12px", sm: "14px" }}
            my={3}
            sx={{ maxWidth: { xs: "100%", md: "280px" } }}
          >
            <strong>Need help or have questions?</strong> We're here for you
            24/7. Safe travels start with trusted service—thank you for choosing
            us to be part of your journey.
          </Typography>

          {/* Social icons */}
          <Box display="flex" gap={2} sx={{ color: Colors.Black }}>
            <Box sx={{ cursor: "pointer" }}>
              <TwitterIcon fontSize="small" />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <InstagramIcon fontSize="small" />
            </Box>
            <Box sx={{ cursor: "pointer" }}>
              <WhatsAppIcon fontSize="small" />
            </Box>
          </Box>
        </Box>

        {/* Contact info section */}
        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
          gap={{ xs: 3, sm: 4, md: 5 }}
          width={{ xs: "100%", md: "65%" }}
        >
          {/* Phone */}
          <Box display="flex" gap={1} alignItems="center" minWidth="200px">
            <Box
              sx={{
                backgroundColor: Colors.Accent,
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LocalPhoneIcon fontSize="medium" sx={{ color: "white" }} />
            </Box>
            <Box>
              <Text.BodyText sx={{ fontSize: "12px" }}>Phone</Text.BodyText>
              <Text.BodyText sx={{ fontSize: "12px", fontWeight: "bold" }}>
                +995 591 20 25 25
              </Text.BodyText>
            </Box>
          </Box>

          {/* Email */}
          <Box display="flex" gap={1} alignItems="center" minWidth="200px">
            <Box
              sx={{
                backgroundColor: Colors.Accent,
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <EmailIcon fontSize="medium" sx={{ color: "white" }} />
            </Box>
            <Box>
              <Text.BodyText sx={{ fontSize: "12px" }}>Email</Text.BodyText>
              <Text.BodyText sx={{ fontSize: "12px", fontWeight: "bold" }}>
                info@geocarsrent.com
              </Text.BodyText>
            </Box>
          </Box>

          {/* Hours */}
          <Box display="flex" gap={1} alignItems="center" minWidth="200px">
            <Box
              sx={{
                backgroundColor: Colors.Accent,
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <AccessTimeIcon fontSize="medium" sx={{ color: "white" }} />
            </Box>
            <Box>
              <Text.BodyText sx={{ fontSize: "12px" }}>
                Opening hours
              </Text.BodyText>
              <Text.BodyText sx={{ fontSize: "12px", fontWeight: "bold" }}>
                Sun-Mon: 10am - 10pm
              </Text.BodyText>
            </Box>
          </Box>

          {/* Address */}
          <Box display="flex" gap={1} alignItems="center" minWidth="200px">
            <Box
              sx={{
                backgroundColor: Colors.Accent,
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LocationOnIcon fontSize="medium" sx={{ color: "white" }} />
            </Box>
            <Box>
              <Text.BodyText sx={{ fontSize: "12px" }}>Address</Text.BodyText>
              <Text.BodyText sx={{ fontSize: "12px", fontWeight: "bold" }}>
                Georgia, Kutaisi
              </Text.BodyText>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
