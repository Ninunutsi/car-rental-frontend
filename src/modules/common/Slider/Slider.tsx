"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

export default function Slider({ car_images }: { car_images: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {car_images.map(({ id, image_url }) => (
          <SwiperSlide key={id}>
            <Image
              alt="car"
              width={600}
              height={400}
              priority={true}
              src={image_url}
              quality={100}
              style={{
                height: isMobile ? "300px" : "380px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {car_images.map(({ id, image_url }) => (
          <SwiperSlide key={id}>
            <Image
              alt="car"
              width={600}
              height={400}
              priority={true}
              src={image_url}
              quality={100}
              style={{
                height: isMobile ? "50px" : "100px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
