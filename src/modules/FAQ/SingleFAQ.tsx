import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { Colors } from "@/styles/colors";

const items = [
  {
    key: "1",
    label: "What documents do I need to rent a car?",
    content: (
      <p>
        You will need a valid driver’s license, a credit card in your name, and
        a passport (if you are renting internationally). You may also need proof
        of insurance or an international driving permit, depending on the
        location.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I rent a car with a debit card?",
    content: (
      <p>
        Most locations require a credit card for car rental. However, some
        locations may allow debit cards with additional conditions, such as a
        credit check or deposit.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the minimum age to rent a car?",
    content: (
      <p>
        The minimum age to rent a car is typically 21. However, drivers under 25
        may incur an additional “young driver” fee. Age requirements may vary
        depending on the location and the type of car.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I need to purchase insurance for the rental?",
    content: (
      <p>
        Insurance is optional, but it is recommended to protect yourself in case
        of an accident or damage to the vehicle. You can either use your
        personal car insurance or purchase coverage from the rental company.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can I drive the rental car outside of the country?",
    content: (
      <p>
        It depends on the location and rental agreement. Please check with the
        rental company for their policy on cross-border travel.
      </p>
    ),
  },
  {
    key: "6",
    label: "What is the fuel policy?",
    content: (
      <p>
        Our rental cars come with a full tank of gas, and we require that you
        return the car with a full tank. If you do not return the car with a
        full tank, you may be charged for the missing fuel.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can I extend my rental period?",
    content: (
      <p>
        Yes, you can extend your rental period, subject to availability. Please
        contact us before your rental period expires to arrange an extension.
      </p>
    ),
  },
  {
    key: "8",
    label: "What happens if I return the car late?",
    content: (
      <p>
        Late returns may be subject to additional charges, depending on the
        length of the delay. We recommend returning the car on time to avoid
        unnecessary fees.
      </p>
    ),
  },
  {
    key: "9",
    label: "Can I cancel my reservation?",
    content: (
      <p>
        Yes, you can cancel your reservation. Please refer to our cancellation
        policy, as there may be a cancellation fee depending on how far in
        advance you cancel.
      </p>
    ),
  },
  {
    key: "10",
    label: "Are there additional fees for renting a car?",
    content: (
      <p>
        Additional fees may apply for services such as GPS, child seats,
        additional drivers, or renting at a different location from where you
        picked up the car. Please check your rental agreement for full details.
      </p>
    ),
  },
  {
    key: "11",
    label: "What should I do if the car breaks down?",
    content: (
      <p>
        If the car breaks down, please contact our customer service immediately
        for assistance. We will arrange a replacement vehicle or provide
        instructions on what to do next.
      </p>
    ),
  },
  {
    key: "12",
    label: "Can I rent a car with no credit history?",
    content: (
      <p>
        Renting without a credit history can be difficult. If you don’t have a
        credit history, please contact us in advance to discuss available
        options, such as using a debit card or providing a larger deposit.
      </p>
    ),
  },
  {
    key: "13",
    label: "Can I rent a car if I have points on my driver’s license?",
    content: (
      <p>
        It depends on the severity of the points and the country of rental.
        Please contact us to inquire about our policy regarding points on your
        driver’s license.
      </p>
    ),
  },
  {
    key: "14",
    label: "Can I drive a rental car to another state or city?",
    content: (
      <p>
        Yes, you can drive a rental car to another state or city within the
        country. However, some rental companies may have restrictions for
        out-of-state or long-distance travel, so please check in advance.
      </p>
    ),
  },
  {
    key: "15",
    label: "What happens if I get into an accident with the rental car?",
    content: (
      <p>
        In the event of an accident, you must immediately notify the police and
        the rental company. You will be responsible for any damage to the car
        unless you purchased insurance or coverage for such incidents.
      </p>
    ),
  },
];

const part1 = items.slice(0, 8);
const part2 = items.slice(8);

const SingleFAQ = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: { xs: "0", sm: "1rem" },
        mt: 2,
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ width: "100%" }}>
        {part1.map((item) => (
          <Accordion
            key={item.key}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0)",
              my: 1,
              padding: "10px 0",
              border: "1px solid #d3d3d3be",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={item.key}
              sx={{
                backgroundColor: "transparent",
                color: Colors.PrimaryMain,
              }}
            >
              <Typography variant="body1" fontWeight={"semibold"}>
                {item.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "transparent" }}>
              {item.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box sx={{ width: "100%" }}>
        {part2.map((item) => (
          <Accordion
            key={item.key}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0)",
              my: 1,
              padding: "10px 0",
              border: "1px solid #d3d3d3be",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={item.key}
              sx={{
                backgroundColor: "transparent",
                color: Colors.PrimaryMain,
              }}
            >
              <Typography variant="body1" fontWeight={"semibold"}>
                {item.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "transparent" }}>
              {item.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default SingleFAQ;
