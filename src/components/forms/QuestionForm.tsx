"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { Button } from "../../components/index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input_fields/input_fields";

const schema = z.object({
  name: z.string().min(2, "First name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  question: z.string().min(5, "Message must be at least 5 characters"),
});

interface questionI {
  name: string;
  email: string;
  question: string;
}

export const QuestionForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      question: "",
    },
  });

  const onSubmit = (data: questionI) => {
    console.log(data);
    setSuccessMessage("Question sent successfully");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        gap: "10px",
        width: { xs: "96%", md: "50%" },
        backgroundColor: "white",
        padding: { xs: "1rem", md: "2.5rem 2rem" },
        mx: { xs: 1, md: "unset" },
        borderRadius: "0.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Input
        name="name"
        label="First Name"
        control={control}
        error={errors.name?.message}
      />

      <Input
        name="email"
        label="Email"
        type="email"
        control={control}
        error={errors.email?.message}
      />
      <Input
        name="question"
        label="Message"
        multiline
        rows={4}
        control={control}
        error={errors.question?.message}
      />
      {/* daamate loaderi */}
      <Button
        type="submit"
        disabled={Boolean(successMessage)}
        label={
          successMessage ? "Question Sent Successfully" : "Send us a question!"
        }
        size="small"
        sx={{
          minWidth: "170px",
          fontWeight: "bold",
          alignSelf: "end",
        }}
      />
    </Box>
  );
};
