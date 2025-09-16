import { Text } from "@/components";
import { Colors } from "@/styles/colors";
import {
  Box,
  Breadcrumbs,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import img from "../../../public/assets/img/67354-removebg-preview.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const About = () => {
  return (
    <Box px={{ xs: 2, md: 4 }}>
      {/* Header */}
      <Box mt={7}>
        <Text.Title fontWeight="bold" my={{ xs: 3 }} textAlign="center">
          About Us
        </Text.Title>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography sx={{ color: Colors.Black }}>Home</Typography>
          <Typography sx={{ color: Colors.Black, fontWeight: "bold" }}>
            About Us
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Mission Section */}
      <Grid container spacing={4} mt={10} mb={15} alignItems="center">
        <Grid item xs={12} md={5}>
          <Text.Title
            fontWeight="bold"
            my={{ xs: 3 }}
            textAlign={{ xs: "center", md: "left" }}
            fontSize={{ xs: "32px", md: "55px" }}
          >
            Where every drive feels extraordinary
          </Text.Title>
        </Grid>

        <Grid item xs={12} md={7} container spacing={3}>
          {[
            {
              title: "Variety of Trusted Brands",
              desc: "Explore a curated selection of top-performing brands, handpicked to bring you the best in quality, innovation, and reliability.",
            },
            {
              title: "Outstanding Customer Support",
              desc: "Our dedicated support team is always ready to help — fast, friendly, and focused on getting you back on track in no time.",
            },
            {
              title: "Maximum Creative Freedom",
              desc: "Build and create on your terms. Whether you're designing, managing, or scaling — you’re always in control.",
            },
            {
              title: "Flexibility, Wherever You Go",
              desc: "Seamless performance across all devices — work, connect, and grow on the move without missing a beat.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Typography fontWeight="bold" variant="h6" mb={1}>
                {item.title}
              </Typography>
              <Typography fontSize="14px" lineHeight="24px">
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Stats Section */}
      <Grid container spacing={4} justifyContent="center" mb={20}>
        {[
          { num: "10k+", label: "Happy customers" },
          { num: "100+", label: "Count of cars" },
          { num: "5+", label: "Years of experience" },
        ].map((stat, i) => (
          <Grid item xs={12} sm={4} textAlign="center" key={i}>
            <Typography variant="h2" color={Colors.Accent} fontWeight="bold">
              {stat.num}
            </Typography>
            <Typography fontWeight="bold" fontSize="20px">
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Features Section */}
      <Grid
        container
        spacing={6}
        mb={20}
        alignItems="center"
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Unlock Unforgettable Memories on the Road
          </Typography>
          <Typography mb={5}>
            Discover the freedom to explore at your own pace. Whether it’s a
            weekend getaway or a cross-country journey, we make every mile
            count.
          </Typography>

          <Grid container spacing={3}>
            {[
              "Premium vehicles tailored for comfort, adventure, and style",
              "Transparent pricing with no hidden fees or surprises",
              "24/7 customer support for a worry-free experience",
              "Flexible booking options to match your plans and pace",
            ].map((text, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box display="flex" gap={1} alignItems="center">
                  <CheckCircleIcon
                    fontSize="large"
                    sx={{ color: Colors.Accent }}
                  />
                  <Typography>{text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box position="relative" height={{ xs: 250, sm: 350 }} width="100%">
            <Image
              src={img}
              alt="geo cars rent"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Reviews Section */}
      <Box mb={15}>
        <Typography variant="h4" fontWeight="bold" mb={5} textAlign="center">
          Reviews from our customers
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              country: "Georgia",
              name: "Irakli M.",
              text: "Smooth pickup, clean car, and very affordable pricing. I highly recommend this service!",
            },
            {
              country: "Germany",
              name: "Anna B.",
              text: "Booking was fast and the car worked perfectly. Friendly team and great customer support.",
            },
            {
              country: "USA",
              name: "Michael R.",
              text: "Easy online reservation, excellent car condition, and helpful staff at every step.",
            },
          ].map((review, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box borderRadius="20px" overflow="hidden" sx={{ boxShadow: 2 }}>
                <Box sx={{ backgroundColor: "white" }} p={5}>
                  <FormatQuoteIcon
                    fontSize="large"
                    sx={{ color: Colors.Accent }}
                  />
                  <Typography textAlign="center">{review.text}</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  flexDirection="column"
                  sx={{ backgroundColor: Colors.Accent, color: Colors.White }}
                  p={3}
                >
                  <Typography>{review.country}</Typography>
                  <Typography>{review.name}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
