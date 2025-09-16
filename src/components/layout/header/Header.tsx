"use client";
import React, { useState } from "react";
import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Navigation, Text } from "@/components";
import CloseIcon from "@mui/icons-material/Close";
import { header_navigation_data } from "@/constants";
import { Colors } from "@/styles/colors";
import logo from "../../../../public/assets/img/logo.png";
import Image from "next/image";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box
        maxWidth={{ xs: "100%", lg: "1200px" }}
        margin={"auto"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={{ xs: 2, sm: 3, md: 4 }}
        paddingY={{ xs: 1.5, sm: 2 }}
      >
        {/* Logo */}
        <Box>
          <Image src={logo} width={110} height={32} alt="geo cars rent logo" />
        </Box>

        {/* Navigation - Hidden on mobile */}
        <Box display={{ xs: "none", sm: "flex", md: "flex" }} gap={3}>
          <Navigation header_navigation_data={header_navigation_data} />
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              padding: 3,
              pt: 8,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: "absolute", top: 12, right: 12 }}
            >
              <CloseIcon />
            </IconButton>

            <Navigation header_navigation_data={header_navigation_data} />

            <Navigation
              header_navigation_data={[
                { id: "4", href: "/terms", linkName: "Terms and Conditions" },
                { id: "5", href: "/policy", linkName: "Privacy Policy" },
              ]}
            />
          </Box>
        </Drawer>

        {/* Contact Info */}
        <Box
          display={{ xs: "none", sm: "flex" }}
          gap={1}
          alignItems="center"
          marginLeft={{ sm: 2 }}
        >
          <Box
            sx={{
              backgroundColor: Colors.Accent,
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LocalPhoneIcon fontSize="small" sx={{ color: "white" }} />
          </Box>
          <Box>
            <Text.BodyText
              sx={{
                fontSize: { xs: "11px", sm: "12px" },
                lineHeight: 1.2,
                color: Colors.SecondaryGrey,
              }}
            >
              Need Help?
            </Text.BodyText>
            <Text.BodyText
              sx={{
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: "bold",
              }}
            >
              +995 591 20 25 25
            </Text.BodyText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
