"use client";
import BookingWrapper from "@/modules/BookingWrapper";
import { RentACarSchema } from "@/utils/schemas/RentACarSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input_fields/input_fields";
import { DateInput } from "../ui/input_fields/DateInput";
import { AutoCompleteInput } from "../ui/input_fields/AutoCompeteInput";
import { Colors } from "@/styles/colors";
import { Box, useMediaQuery } from "@mui/material";
import { CheckboxInput } from "../ui/input_fields/Checkbox";
import { Text } from "../ui/typography/Typography";
import { convertDateFormat, formatDate } from "@/utils/functions";
import Link from "next/link";
import { DropdownSelect } from "../ui/dropdown_select/DropDownSelect";
import { CheckboxGroup } from "../ui/input_fields/CheckboxGroup";
import { RadioGroupInput } from "../ui/input_fields/RadioGroup";
import { Button } from "../ui/button/button";
import Safety from "@/modules/Safety";
import { reserveACar } from "@/libs/CarsList/getCarsList";
import { useCarDetails } from "@/store/useCarDetails";
import ResponsiveDialog from "@/modules/SuccessMessage";
import ErrorMessage from "@/modules/ErrorMessage";

export const RentalForm = ({ optionalServices, ISO, singleCarData }: any) => {
  const router = useRouter();
  const { setOptionalServices } = useCarDetails();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const { id } = useParams();

  const searchParams = useSearchParams();
  const pick_location = searchParams.get("pickUpLocation");
  const drop_ocation = searchParams.get("dropOffLocation");
  const start_date = searchParams.get("pickUpDate");
  const end_date = searchParams.get("dropOffDate");
  const pick_time = searchParams.get("pickUpTime");
  const drop_time = searchParams.get("dropOffTime");
  const handleClose = () => {
    router.push("/");

    setOpen(false);
  };
  const handleCloseError = () => {
    setOpenError(false);
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RentACarSchema),
    defaultValues: {
      date_of_birth: "",
      full_name: "",
      email: "",
      phone: "",
      optional_phone: "",
      payment_method: "cash",
      pick_up_time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
      drop_off_time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
      comment: "",
      accept_terms: false,
      privacy_policy: false,
      preferences: {
        whatsapp: false,
        telegram: false,
        viber: false,
      },
      pick_up_location: "",
      pick_up_location_details: "",
      drop_off_city: "Select a city",
      drop_off_location: "",
      drop_off_location_details: "",
      country_code: "",
      country_code_optional: "",
      additional_services: [] as {
        service_id: number;
        service_name: string;
        quantity: number;
        price: string;
      }[],
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const {
        full_name,
        date_of_birth,
        pick_up_location,
        drop_off_location,
        email,
        phone,
        pick_up_location_details,
        drop_off_location_details,
        optional_phone,
        country_code,
        contact_methods,
        additional_services,
      } = data;
      const totalPrice = additional_services.reduce((total, service) => {
        return total + parseFloat(service.price) * service.quantity;
      }, 0);
      const wholeData = {
        car_id: id,
        customer: {
          full_name,
          email,
          date_of_birth: convertDateFormat(date_of_birth),
          contact_phone_number: `+(${country_code.slice(1)})${phone}`,
          additional_phone_number: `+(${country_code.slice(
            1
          )})${optional_phone}`,
          ...contact_methods,
        },
        start_date: start_date,
        end_date: end_date,
        pick_up_place: pick_location,
        pick_up_time: pick_time,
        drop_off_time: drop_time,
        pick_up_address:
          pick_up_location == "airport" ? "airport" : pick_up_location_details,
        drop_off_place: drop_ocation,
        drop_off_address:
          drop_off_location == "airport"
            ? "airport"
            : drop_off_location_details,
        rental_fee: singleCarData.price,
        total_service_fee: Number(singleCarData.price) + Number(totalPrice),
        reservation_services: additional_services,
      };
      const res = await reserveACar(wholeData);
      if (res) {
        setOpen(true);
      }
    } catch {
      setOpenError(true);
    }
  };
  const pick_up_location = watch("pick_up_location");
  const drop_off_location = watch("drop_off_location");
  const additionalServices = watch("additional_services");
  const previousServices = useRef(additionalServices);

  useEffect(() => {
    if (
      JSON.stringify(previousServices.current) !==
      JSON.stringify(additionalServices)
    ) {
      setOptionalServices(additionalServices);
      previousServices.current = additionalServices;
    }
  }, [additionalServices, setOptionalServices]);

  return (
    <Box
      sx={{ width: { xs: "100%", sm: "70%" } }}
      mt={{ xs: "10px", sm: "30px" }}
      px={{ xs: "10px", sm: "unset" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <BookingWrapper
          header="Billing Info"
          text="Please enter your billing info"
          step={1}
        >
          <Input
            name="full_name"
            label="Full Name"
            control={control}
            error={errors.full_name?.message}
            width={isMobile ? "100%" : "49%"}
          />
          <DateInput
            name="date_of_birth"
            control={control}
            label="Date of Birth"
            width={isMobile ? "100%" : "49%"}
            error={errors.date_of_birth?.message}
          />
          <Input
            name="email"
            label="Email"
            control={control}
            error={errors.email?.message}
            width={isMobile ? "100%" : "49%"}
          />
          <Box display={"flex"} width={isMobile ? "100%" : "49%"} gap={1}>
            <AutoCompleteInput
              name="country_code"
              label="ISO"
              placeholder="Seacrh.."
              control={control}
              options={ISO}
              error={errors.country_code?.message}
              width="40%"
            />
            <Input
              name="phone"
              label="Phone"
              type="number"
              control={control}
              error={errors.phone?.message}
              width="60%"
            />
          </Box>
          <Box display={"flex"} width={isMobile ? "100%" : "49%"} gap={1}>
            <AutoCompleteInput
              name="country_code_optional"
              label="ISO"
              placeholder="Search.."
              control={control}
              options={ISO}
              error={errors.country_code_optional?.message}
              width="40%"
            />
            <Input
              name="optional_phone"
              label="Optional Phone"
              type="number"
              control={control}
              error={errors.optional_phone?.message}
              width="60%"
            />
          </Box>
          <Box
            display={"flex"}
            gap={isMobile ? 0 : 4}
            width={isMobile ? "100%" : "49%"}
            alignItems={isMobile ? "flex-start" : "flex-start"}
            flexDirection={isMobile ? "column" : "row"}
            ml={isMobile ? 1 : "unset"}
          >
            <Text.BodyText
              fontWeight={"bold"}
              sx={{
                color: Colors.PrimaryMain,
                position: "relative",
                fontSize: "13px",
              }}
            >
              Contact Preference:
            </Text.BodyText>
            <Box position={"relative"}>
              <Box display={"flex"} flexWrap={"wrap"}>
                <CheckboxInput
                  name="preferences.whatsapp"
                  label="WhatsApp"
                  control={control}
                  error={errors.preferences?.message}
                />
                <CheckboxInput
                  name="preferences.telegram"
                  label="Telegram"
                  control={control}
                  error={errors.preferences?.message}
                />
                <CheckboxInput
                  name="preferences.viber"
                  label="Viber"
                  control={control}
                  error={errors.preferences?.message}
                />
              </Box>
              <Text.BodyText
                sx={{
                  fontSize: "10px",
                  color: Colors.Error,
                  display: "inline-block",
                  position: "absolute",
                }}
              >
                {errors.preferences?.root?.message
                  ? errors.preferences?.root?.message
                  : null}
              </Text.BodyText>
            </Box>
          </Box>
        </BookingWrapper>
        <BookingWrapper
          header="Rental Info"
          text="Please select your rental locations"
          step={2}
        >
          <Box flex={"1 1 100%"}>
            {typeof window ? (
              <Text.Subtitle variant="h6" fontSize={"15px"} fontWeight={"bold"}>
                Pick up -{" "}
                {searchParams
                  ? `${pick_location}, ${formatDate(String(start_date))}`
                  : "Loading..."}
              </Text.Subtitle>
            ) : (
              <p>loading</p>
            )}
            <Text.BodyText fontSize={"10px"} mt={"4px"} mb={1}>
              To select a different city, please initiate{" "}
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: Colors.Accent,
                    cursor: "pointer",
                  }}
                >
                  a new search.
                </span>
              </Link>
            </Text.BodyText>
          </Box>

          <DropdownSelect
            name="pick_up_location"
            control={control}
            label="Pick up Location"
            error={errors.pick_up_location?.message}
            options={[
              { label: "Airport", value: "airport" },
              { label: "City Delivery", value: "city" },
            ]}
          />

          {pick_up_location == "city" && (
            <Input
              name="pick_up_location_details"
              label="Location Details"
              control={control}
              error={errors.pick_up_location_details?.message}
              width="100%"
            />
          )}

          <Box mt={2} display={"block"} flex={"1 1 100%"}>
            {typeof window ? (
              <Text.Subtitle variant="h6" fontSize={"15px"} fontWeight={"bold"}>
                Drop off -{" "}
                {searchParams
                  ? `${drop_ocation}, ${formatDate(String(end_date))}`
                  : "Loading..."}
              </Text.Subtitle>
            ) : (
              <p>loading</p>
            )}
            <Text.BodyText fontSize={"10px"} mt={"4px"} mb={1}>
              To select a different city, please initiate{" "}
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: Colors.Accent,
                    cursor: "pointer",
                  }}
                >
                  a new search.
                </span>
              </Link>
            </Text.BodyText>
          </Box>

          <DropdownSelect
            name="drop_off_location"
            control={control}
            label="Drop off Location"
            error={errors.drop_off_location?.message}
            options={[
              { label: "Airport", value: "airport" },
              { label: "City Delivery", value: "city" },
            ]}
          />
          {drop_off_location == "city" && (
            <Input
              name="drop_off_location_details"
              label="Location Details"
              control={control}
              error={errors.drop_off_location_details?.message}
              width="100%"
            />
          )}
        </BookingWrapper>
        <BookingWrapper
          header="Additional Services"
          text="Please select if you want any additional services."
          step={3}
        >
          <Box width={"100%"}>
            <CheckboxGroup
              name="additional_services"
              control={control}
              options={optionalServices.results}
            />
          </Box>
        </BookingWrapper>

        <BookingWrapper
          header="Payment Method"
          text="Please enter your payment method"
          step={4}
        >
          <Box width={"100%"}>
            <RadioGroupInput
              name="radio"
              control={control}
              defaultValue="cash"
              options={[
                { value: "cash", label: "Cash", disabled: false },
                { value: "paypal", label: "Paypal", disabled: true },
                { value: "mastercard", label: "Master Card", disabled: true },
                { value: "visa", label: "Visa", disabled: true },
              ]}
            />
          </Box>
        </BookingWrapper>
        <BookingWrapper
          header="Confirmation"
          text="We are getting to the end. Just few clicks and your rental is ready!"
          step={5}
        >
          <Box width={"100%"}>
            <Input
              name="message"
              label="Message"
              multiline
              rows={4}
              control={control}
            />
            <Box display={"inline-block"} pl={"5px"}>
              <Box position={"relative"}>
                <CheckboxInput
                  name="accept_terms"
                  label="I accept the terms of use."
                  control={control}
                  error={errors.accept_terms?.message}
                />
              </Box>
              <Box position={"relative"} mt={"5px"}>
                <CheckboxInput
                  name="privacy_policy"
                  label="I have read the privacy policy."
                  control={control}
                  error={errors.privacy_policy?.message}
                />
              </Box>
            </Box>
            <Box mt={2} width={"100%"}>
              <Button
                type="submit"
                label="Rent now"
                onClick={handleSubmit(onSubmit)}
                sx={{ width: "100%" }}
                size="large"
              />
            </Box>
          </Box>
          <Safety />
        </BookingWrapper>
      </form>
      <ResponsiveDialog open={open} handleClose={handleClose} />
      <ErrorMessage open={openError} handleClose={handleCloseError} />
    </Box>
  );
};
