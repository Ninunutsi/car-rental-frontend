import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Text } from "@/components";
import { Colors } from "@/styles/colors";

const PrivacyPolicy = () => {
  return (
    <Box m={{ xs: 1, sm: "unset" }}>
      <Head>
        <title>Privacy Policy | Geo Cars Rent</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle your data."
        />
      </Head>
      <Text.Title sx={{ mb: 2 }} mt={3}>
        Privacy Policy
      </Text.Title>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>1. Introduction</Text.Subtitle>
        <Text.BodyText>
          Welcome to{" "}
          <span style={{ color: Colors.Accent, fontWeight: "bold" }}>
            Geo Cars Rent
          </span>
          . Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you visit our
          website.
        </Text.BodyText>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          2. Information We Collect
        </Text.Subtitle>
        <Text.BodyText>
          When you use our website, we may collect the following types of
          information:
        </Text.BodyText>
        <Box ml={2} mt={1}>
          <Text.BodyText>
            - <span style={{ fontWeight: "bold" }}>Personal Information</span>:
            Name, email address, and other details you voluntarily provide.
          </Text.BodyText>
          <Text.BodyText>
            -
            <span style={{ fontWeight: "bold" }}>
              Cookies and Tracking Technologies
            </span>
            : Information such as IP address, browser type, pages visited, and
            time spent on our site.
          </Text.BodyText>
        </Box>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          3. How We Use Your Information
        </Text.Subtitle>
        <Text.BodyText>We use the collected data for:</Text.BodyText>
        <Box ml={2} mt={1}>
          <Text.BodyText>- Improving user experience.</Text.BodyText>
          <Text.BodyText>
            - Understanding visitor behavior and website traffic.
          </Text.BodyText>
          <Text.BodyText>
            - Providing personalized content and advertisements.
          </Text.BodyText>
          <Text.BodyText>
            - Enhancing website functionality and security.
          </Text.BodyText>
        </Box>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          4. Cookies and Tracking Technologies
        </Text.Subtitle>
        <Text.BodyText>
          We use cookies to enhance your experience. Cookies help us understand
          how users interact with our site and enable us to provide relevant
          content. By continuing to use our website, you consent to our use of
          cookies.
        </Text.BodyText>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          5. Third-Party Services
        </Text.Subtitle>
        <Text.BodyText>
          We may use third-party analytics and advertising services that collect
          and process data on our behalf. These third parties comply with data
          protection regulations and ensure secure handling of your information.
        </Text.BodyText>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          6. Data Protection and Security
        </Text.Subtitle>
        <Text.BodyText>
          We take appropriate security measures to protect your personal data
          from unauthorized access, disclosure, alteration, or destruction.
        </Text.BodyText>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>7. Your Rights</Text.Subtitle>
        <Text.BodyText>You have the right to:</Text.BodyText>
        <Box ml={2} mt={1}>
          <Text.BodyText>
            - Access, update, or delete your personal data.
          </Text.BodyText>
          <Text.BodyText>
            - Withdraw your consent for cookies and tracking technologies.
          </Text.BodyText>
          <Text.BodyText>
            - Request a copy of the data we hold about you.
          </Text.BodyText>
        </Box>
      </Box>
      <Box mb={2}>
        <Text.Subtitle fontWeight={"bold"}>
          8. Changes to This Privacy Policy
        </Text.Subtitle>
        <Text.BodyText>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date.
        </Text.BodyText>
      </Box>
      <Box mb={4}>
        <Text.Subtitle fontWeight={"bold"}>9. Contact Us</Text.Subtitle>
        <Text.BodyText>
          If you have any questions about this Privacy Policy, please contact us
          at <span style={{ fontWeight: "bold" }}>gmail.example@gmail.com</span>
          .
        </Text.BodyText>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
