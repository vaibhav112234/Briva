// components/Carousel.jsx
"use client";
import dynamic from "next/dynamic";

// Dynamically import Slider so Next.js only loads it on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Carousel({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    // responsive: [ ... ] // add breakpoints here if you want
  };

  return (
    <div className="max-w-full mx-auto">
      <Slider {...settings}>
        {slides.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`slide-${i}`} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
