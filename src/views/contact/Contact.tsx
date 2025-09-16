import { ContactForm, Text } from "@/components";
import { Colors } from "@/styles/colors";
import { Box, Breadcrumbs, Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import cars from "../../../public/assets/svg/cars.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <Box px={{ xs: 2, md: 4 }}>
      {/* Header */}
      <Box mt={5}>
        <Text.Title fontWeight="bold" my={{ xs: 3 }} textAlign="center">
          Contact Us
        </Text.Title>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography sx={{ color: Colors.Black }}>Home</Typography>
          <Typography sx={{ color: Colors.Black, fontWeight: "bold" }}>
            Contact Us
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Intro Section */}
      <Grid
        container
        spacing={4}
        mt={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={8}>
          <Typography
            variant="h3"
            fontSize={{ xs: "28px", sm: "40px", md: "45px" }}
            fontWeight="bold"
            lineHeight={{ xs: "42px", sm: "52px", md: "55px" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            Get in touch with us. <br />
            We're here to assist you.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md="auto"
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            gap={3}
            sx={{ color: Colors.Black }}
          >
            {[TwitterIcon, InstagramIcon, WhatsAppIcon].map((Icon, i) => (
              <IconButton key={i} sx={{ color: Colors.Black }}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Box mt={8}>
        <ContactForm />
      </Box>

      {/* Contact Info */}
      <Grid
        container
        spacing={4}
        my={7}
        justifyContent="center"
        alignItems="stretch"
      >
        {[
          {
            icon: <LocalPhoneIcon fontSize="medium" sx={{ color: "white" }} />,
            title: "Phone",
            value: "+995 591 20 25 25",
          },
          {
            icon: <EmailIcon fontSize="medium" sx={{ color: "white" }} />,
            title: "Email",
            value: "info@geocarsrent.com",
          },
          {
            icon: <AccessTimeIcon fontSize="medium" sx={{ color: "white" }} />,
            title: "Opening hours",
            value: "Sun-Mon: 10am - 10pm",
          },
          {
            icon: <LocationOnIcon fontSize="medium" sx={{ color: "white" }} />,
            title: "Address",
            value: "Georgia, Kutaisi",
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box display="flex" gap={2} alignItems="center">
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
                {item.icon}
              </Box>
              <Box>
                <Text.BodyText sx={{ fontSize: "12px" }}>
                  {item.title}
                </Text.BodyText>
                <Text.BodyText sx={{ fontSize: "12px", fontWeight: "bold" }}>
                  {item.value}
                </Text.BodyText>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Logos Section */}
      <Box width="100%" my={10}>
        <Image
          src={cars}
          alt="cars logos"
          layout="responsive"
          width={100}
          height={20}
        />
      </Box>
    </Box>
  );
};

export default Contact;
