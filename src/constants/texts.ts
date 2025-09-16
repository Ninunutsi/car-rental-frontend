interface teamMembersI {
  id: string;
  name: string;
  role: string;
  description: string;
}
export const teamMembers: teamMembersI[] = [
  {
    id: "1",
    name: "Alex Khurtsidze",
    role: "Founder & CEO",
    description:
      "Alex is the visionary behind Geo Cars Rent, with over 10 years of experience in the car rental and travel industry. He is passionate about providing customers with top-notch service.",
  },
  {
    id: "2",
    name: "Sophio Khvedelidze",
    role: "Customer Support Lead",
    description:
      "Sophio ensures that every customer has a seamless experience with Geo Cars Rent, offering support every step of the way.",
  },
];

interface testimonialsI {
  id: string;
  name: string;
  feedback: string;
}

export const testimonials: testimonialsI[] = [
  {
    id: "1",
    name: "John Doe",
    feedback:
      "Geo Cars Rent made my business trip hassle-free with their easy rental process. The car was in excellent condition!",
  },
  {
    id: "2",
    name: "Sarah Smith",
    feedback:
      "Great service and fantastic customer support. Highly recommend for anyone looking for a reliable car rental service!",
  },
  {
    id: "3",
    name: "John Doe",
    feedback:
      "Geo Cars Rent made my business trip hassle-free with their easy rental process. The car was in excellent condition!",
  },
  {
    id: "4",
    name: "Sarah Smith",
    feedback:
      "Great service and fantastic customer support. Highly recommend for anyone looking for a reliable car rental service!",
  },
];

export const termsData = [
  {
    title: "Introduction",
    content: `Welcome to our website. These Terms and Conditions govern your use of our website. By accessing or using this website, you agree to comply with these terms. Please read them carefully.`,
  },
  {
    title: "Usage Rights",
    content: `You are granted a limited, non-exclusive, non-transferable license to use the website. You may not copy, distribute, or modify any content without prior written consent.`,
  },
  {
    title: "Eligibility to Rent a Vehicle",
    content: `To rent a vehicle from our website, you must be at least 21 years old, hold a valid driver’s license, and provide a valid credit card or payment method for security purposes.`,
  },
  {
    title: "Rental Period",
    content: `The rental period starts from the time you collect the vehicle and ends when it is returned. Late returns may result in additional charges.`,
  },
  {
    title: "Vehicle Condition and Usage",
    content: `You are responsible for returning the vehicle in the same condition. You must follow traffic laws and return the vehicle with the same fuel level.`,
  },
  {
    title: "Insurance and Liability",
    content: `Our rentals include basic insurance. However, you may be responsible for damages that exceed insurance limits or result from reckless driving.`,
  },
  {
    title: "Limitation of Liability",
    content: `We are not liable for any damages or losses arising from the use or inability to use our website. The website is provided on an "as-is" basis without warranties of any kind.`,
  },
  {
    title: "Cancellations and Modifications",
    content: `Cancellations made less than 24 hours before the rental period may incur a fee. Changes to your booking depend on vehicle availability.`,
  },
  {
    title: "Payment Terms",
    content: `Payment is due at the time of booking. A security deposit may be required, refundable upon vehicle return in acceptable condition.`,
  },
  {
    title: "Termination of Rental Agreement",
    content: `We reserve the right to terminate your rental agreement if you violate any terms.`,
  },
  {
    title: "Governing Law",
    content: `This Agreement shall be governed by the laws of [Insert Country/State].`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to update or modify these terms at any time. Any changes will be reflected on this page, and your continued use of the website will constitute your acceptance of those changes.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions or concerns about these terms, please contact us at 
      support@example.com
    `,
  },
];
