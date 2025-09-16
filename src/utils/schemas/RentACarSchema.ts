import { z } from "zod";

export const RentACarSchema = z
  .object({
    full_name: z.string().min(1, "Full name can not be empty."),
    date_of_birth: z
      .date({ required_error: "Date is required" })
      .refine((date) => date <= new Date(), {
        message: "Doubt you are from the future :)",
      })
      .refine(
        (date) => date >= new Date(new Date().getFullYear() - 100, 0, 1),
        {
          message: "That's way too old! Pick a more recent date.",
        }
      ),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    phone: z
      .string()
      .min(1, "Phone is required")
      .max(15, "Phone number cannot exceed 20 characters."),
    optional_phone: z
      .string()
      .min(1, "Optional Phone is required")
      .max(15, "Phone number cannot exceed 20 characters."),
    preferences: z
      .object({
        whatsapp: z.boolean(),
        telegram: z.boolean(),
        viber: z.boolean(),
      })
      .refine((data) => data.whatsapp || data.telegram || data.viber, {
        message: "At least one messaging app must be selected",
      }),

    pick_up_time: z
      .object({
        hours: z.number().min(0).max(96),
        minutes: z.number().min(0).max(59),
      })
      .refine((data) => data.hours >= 0 && data.minutes >= 0, {
        message: "Time must be non-negative",
      }),
    drop_off_time: z
      .object({
        hours: z.number().min(0).max(96),
        minutes: z.number().min(0).max(59),
      })
      .refine((data) => data.hours >= 0 && data.minutes >= 0, {
        message: "Time must be non-negative",
      }),
    accept_terms: z
      .boolean()
      .refine((val) => val === true, "You must accept the terms."),
    privacy_policy: z
      .boolean()
      .refine((val) => val === true, "You must accept the privacy policy."),
    pick_up_location: z.enum(["airport", "city"], {
      message: "Please select a value.",
    }),
    pick_up_location_details: z.string().optional(),

    drop_off_location: z.enum(["airport", "city"], {
      message: "Please select a value.",
    }),
    drop_off_location_details: z.string().optional(),
    country_code: z
      .string()
      .nonempty("Country is required")
      .min(2, "Invalid country selection"),
    country_code_optional: z
      .string()
      .nonempty("Country is required") // Validate that the country code is non-empty
      .min(2, "Invalid country selection"),
    additional_services: z
      .array(
        z.object({
          service_name: z.string(),
          service_id: z.any(),
          quantity: z.number(),
          price: z.string(),
        })
      )
      .optional(),
  })

  .superRefine((data, ctx) => {
    if (data.pick_up_location === "city" && !data.pick_up_location_details) {
      ctx.addIssue({
        code: "custom",
        path: ["pick_up_location_details"],
        message: "Please enter location details.",
      });
    }
  })
  .superRefine((data, ctx) => {
    if (data.drop_off_location === "city" && !data.drop_off_location_details) {
      ctx.addIssue({
        code: "custom",
        path: ["drop_off_location_details"],
        message: "Please enter location details.",
      });
    }
  });

export const filter_schema = z.object({
  pickUp_location: z
    .string()
    .nonempty("Pick up location is required")
    .refine((value) => ["kutaisi", "batumi"].includes(value), {
      message: "Invalid pick up location",
    }),
  dropOff_location: z
    .string()
    .nonempty("Drop off location is required")
    .refine((value) => ["kutaisi", "batumi"].includes(value), {
      message: "Invalid drop off location",
    }),
  rental_date: z
    .array(
      z.string().refine((date) => !isNaN(new Date(date).getTime()), {
        message: "Invalid date format",
      })
    )
    .length(2, "Rental date must be a range of two dates"),
});
