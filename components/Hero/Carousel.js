// components/Carousel.jsx
"use client";
import dynamic from "next/dynamic";
import React from "react";
// Dynamically import Slider so Next.js only loads it on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Carousel({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // responsive: [ ... ] // add breakpoints here if you want
  };

  return (
    <div className="max-w-full mx-auto h-[40%] overflow-hidden ">
      <Slider {...settings}>
        {slides.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full object-contain overflow-hidden"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
