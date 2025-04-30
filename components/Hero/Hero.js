import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

function Hero() {
  const slides = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
  return (
    <main className="p-8">
      <Carousel slides={slides} />
    </main>
  );
}

export default Hero;
