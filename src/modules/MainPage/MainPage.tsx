import React from "react";
import { LocationDateForm, TypesFilter } from "@/components";
import { Box, Typography } from "@mui/material";
import background from "../../../public/assets/img/Group.png";
import car from "../../../public/assets/img/car.png";
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Colors } from "@/styles/colors";

const MainPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px 10px", sm: "30px 20px", md: 1 },
        position: "relative",
        height: { xs: "auto", md: "660px" },
        backgroundColor: Colors.Accent,
        borderRadius: "40px",
        overflow: "hidden",
        mt: 3,
      }}
    >
      {/* Background image */}
      <Image
        src={background}
        alt="Background Image"
        fill
        quality={100}
        priority={true}
        sizes="100vw"
        style={{
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Car image */}
      <Image
        src={car}
        alt="Car Image"
        quality={100}
        width={600}
        height={400}
        priority={true}
        style={{
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          left: "20%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: "0.5",
        }}
      />

      {/* Down arrow */}
      <KeyboardDoubleArrowDownIcon
        fontSize="large"
        sx={{
          zIndex: 1,
          position: "absolute",
          bottom: 5,
          left: "50%",
          color: "white",
          transform: "translateX(-50%)",
        }}
      />

      {/* Content */}
      <Box
        margin={"auto"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={"space-between"}
        mt={{ xs: 5, md: 10 }}
        p={{ xs: "0 10px", sm: "0 20px" }}
        gap={{ xs: 4, md: 0 }}
        sx={{ position: "relative", zIndex: 10 }}
      >
        {/* Left Text Section */}
        <Box width={{ xs: "100%", md: "60%" }}>
          <Typography
            sx={{
              color: Colors.White,
              fontSize: { xs: "32px", sm: "40px", md: "55px" },
              lineHeight: { xs: "42px", sm: "50px", md: "70px" },
              fontWeight: "bold",
              fontFamily: "Mona Sans",
              mt: { xs: 3, md: 5 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Experience the road like never before
          </Typography>

          <Typography
            sx={{
              color: Colors.White,
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: { xs: "24px", sm: "28px", md: "30px" },
              fontFamily: "Mona Sans",
              mt: 3,
              width: { xs: "100%", sm: "80%", md: "70%" },
              textAlign: { xs: "center", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Quick, affordable, and reliable car rentals for every journey.
            Choose your car, book in minutes, and hit the road—no hassle, just
            freedom.
          </Typography>
        </Box>

        {/* Right Form Section */}
        <Box
          position={"relative"}
          zIndex={100}
          sx={{ backgroundColor: "#fffffff8" }}
          padding={{ xs: "12px 15px", sm: "15px 20px" }}
          borderRadius={"12px"}
          mx={{ xs: "auto", md: "unset" }}
          boxShadow={3}
          width={{ xs: "100%", sm: "90%", md: "416px" }}
        >
          <LocationDateForm />
          <TypesFilter />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
