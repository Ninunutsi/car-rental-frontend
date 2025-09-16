import { termsData } from "@/constants/texts";
import { Colors } from "@/styles/colors";
import { Container, Typography, Box } from "@mui/material";
import Head from "next/head";

const Terms = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and conditions of our website"
        />
      </Head>

      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" color={Colors.PrimaryMain}>
            Terms and Conditions
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box
          sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 3, p: 4 }}
        >
          {termsData.map((section, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: Colors.PrimaryMain }}
              >
                {section.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color={Colors.PrimaryMain} align="center">
            &copy; {new Date().getFullYear()} GEO CARS RENT. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Terms;
