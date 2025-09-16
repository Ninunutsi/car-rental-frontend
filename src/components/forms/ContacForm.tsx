"use client";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "../ui/input_fields/input_fields";
import { Button } from "../ui/button/button";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexWrap={"wrap"}
      gap={2}
      mt={7}
    >
      <Input
        name="firstName"
        label="First Name"
        control={control}
        variant="standard"
        width="32%"
        error={errors.firstName?.message}
      />
      <Input
        name="lastName"
        label="Last Name"
        control={control}
        width="32%"
        variant="standard"
        error={errors.lastName?.message}
      />
      <Input
        name="email"
        label="Email"
        type="email"
        width="32%"
        variant="standard"
        control={control}
        error={errors.email?.message}
      />
      <Input
        name="message"
        label="Message"
        multiline
        rows={4}
        control={control}
        variant="standard"
        error={errors.message?.message}
      />
      <Button
        label="Leave us a message"
        type="submit"
        size="small"
        sx={{ width: "200px ", padding: "13px" }}
        icon={<SendIcon />}
      />
    </Box>
  );
};

export default Input;
export { ContactForm };
